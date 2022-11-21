import { describe, expect, it, vi, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Home } from "./index";

import mockedAxios, { AxiosResponse } from "axios";

vi.mock("axios");

describe("Page Home", () => {
  afterEach(cleanup);

  const mAxiosResponse = {
    data: {
      _id: "1",
      img: "https://localhost:3000/image",
      title: "camisa",
      description: "Boa camisa",
      price: "350",
    },
  } as AxiosResponse;

  it("must mock getProducts", () => {
    (mockedAxios as any).mockResolvedValue(mAxiosResponse);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Home currentPage={0} setCurrentPage={vi.fn} />
      </MemoryRouter>
    );

    expect(mockedAxios).toHaveBeenCalledWith({
      method: "get",
      baseURL: "http://localhost:5000",
      params: { offset: 0 },
    });
  });

  it("must mock getSearch", () => {
    (mockedAxios as any).mockResolvedValue(mAxiosResponse);

    render(
      <MemoryRouter initialEntries={["/?q=camisas"]}>
        <Home currentPage={0} setCurrentPage={vi.fn} />
      </MemoryRouter>
    );

    expect(mockedAxios).toHaveBeenCalledWith({
      method: "get",
      baseURL: "http://localhost:5000",
      url: "/search",
      params: { offset: 0, q: "camisas" },
    });
  });

  it("should filter all products", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Home currentPage={0} setCurrentPage={vi.fn} />
      </MemoryRouter>
    );

    expect(getByText("Todos os produtos")).toHaveAttribute("href", "/");
  });

  it("should filter all product t-shirts", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Home currentPage={0} setCurrentPage={vi.fn} />
      </MemoryRouter>
    );

    expect(getByText("Camisetas")).toHaveAttribute("href", "/?q=camisetas");
  });

  it("should filter all product mugs", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Home currentPage={0} setCurrentPage={vi.fn} />
      </MemoryRouter>
    );

    expect(getByText("Canecas")).toHaveAttribute("href", "/?q=canecas");
  });
});

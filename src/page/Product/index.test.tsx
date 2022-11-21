import { describe, expect, it, vi, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import { Product } from "./index";

import mockedAxios, { AxiosResponse } from "axios";

vi.mock("axios");

describe("Page Product", () => {
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

  it("should mock getById", () => {
    (mockedAxios as any).mockResolvedValue(mAxiosResponse);

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Product getAllCart={vi.fn} />
      </MemoryRouter>
    );

    expect(mockedAxios).toHaveBeenCalledWith({
      method: "get",
      baseURL: "http://localhost:5000",
      url: "/product/undefined",
    });
  });

  it("should mock addCart", async () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <Product getAllCart={vi.fn} />
      </MemoryRouter>
    );

    (mockedAxios as any).mockResolvedValue(mAxiosResponse);

    await userEvent.click(getByRole("button"));

    expect(mockedAxios).toHaveBeenCalledWith({
      method: "post",
      baseURL: "http://localhost:5000",
      url: "/new",
      data: { id: "1" },
    });
  });
});

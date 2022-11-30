import { describe, vi, expect, afterEach, beforeEach } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Home } from "./index";
import { useProduct } from "@/hooks";

const mockedUseCardAll = useProduct as jest.Mock<any>;
vi.mock("../../hooks/useProduct");

describe("Page Home", () => {
  beforeEach(() => {
    mockedUseCardAll.mockImplementation(() => ({ isLoading: true }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const mockData = {
    currentItens: [
      {
        _id: "1",
        img: "https://localhost:3000/image",
        title: "camisa",
        description: "Boa camisa",
        price: "350",
      },
    ],
    page: "2",
  };

  it("must mock getProducts", () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>
    );

    // expect(mockedAxios).toHaveBeenCalledWith({
    //   method: "get",
    //   baseURL: "http://localhost:5000",
    //   params: { offset: 0 },
    // });
  });

  it("must mock getSearch", () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/?q=camisas"]}>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>
    );

    // expect(mockedAxios).toHaveBeenCalledWith({
    //   method: "get",
    //   baseURL: "http://localhost:5000",
    //   url: "/search",
    //   params: { offset: 0, q: "camisas" },
    // });
  });

  it("should filter all products", () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
    }));

    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByText("Todos os produtos")).toHaveAttribute("href", "/");
  });

  it("should filter all product t-shirts", () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
    }));

    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByText("Camisetas")).toHaveAttribute("href", "/?q=camisetas");
  });

  it("should filter all product mugs", () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
    }));

    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByText("Canecas")).toHaveAttribute("href", "/?q=canecas");
  });
});

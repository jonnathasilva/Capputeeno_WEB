import { describe, vi, expect, afterEach, beforeEach } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import { Product } from "./index";

import { useProductById } from "@/hooks";

const mockedUseCardAll = useProductById as jest.Mock<any>;
vi.mock("../../hooks/useProductById");

describe("Page Product", () => {
  beforeEach(() => {
    mockedUseCardAll.mockImplementation(() => ({ isLoading: true }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const mockData = {
    _id: "1",
    img: "https://localhost:3000/image",
    title: "camisa",
    description: "Boa camisa",
    price: "350",
  };

  it("Renders without crashing", () => {
    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/product/1"]}>
          <Product />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByText("Carregando...")).toBeInTheDocument();
  });

  it("should mock getById", () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/product/1"]}>
          <Product />
        </MemoryRouter>
      </QueryClientProvider>
    );

    // expect(mockedAxios).toHaveBeenCalledWith({
    //   method: "get",
    //   baseURL: "http://localhost:5000",
    //   url: "/product/undefined",
    // });
  });

  it("should mock addCart", async () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/product/1"]}>
          <Product />
        </MemoryRouter>
      </QueryClientProvider>
    );

    await userEvent.click(getByRole("button"));

    // expect(mockedAxios).toHaveBeenCalledWith({
    //   method: "post",
    //   baseURL: "http://localhost:5000",
    //   url: "/new",
    //   data: { id: "1" },
    // });
  });
});

import { describe, vi, expect, afterEach, beforeEach } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

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

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/product/1"]}>
          <Product />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByTestId("loading")).toBeInTheDocument();
  });

  it("should show title", async () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/product/1"]}>
          <Product />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByText("camisa")).toBeInTheDocument();
  });

  it("should show price", async () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/product/1"]}>
          <Product />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByText("R$ 350")).toBeInTheDocument();
  });

  it("should show description", async () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/product/1"]}>
          <Product />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByText("Boa camisa")).toBeInTheDocument();
  });

  it("should show img", async () => {
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

    expect(getByRole("img")).toHaveAttribute("alt", "camisa");
    expect(getByRole("img")).toHaveAttribute(
      "src",
      "https://localhost:3000/image"
    );
  });
});

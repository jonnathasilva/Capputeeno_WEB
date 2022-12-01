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

  it("Renders without crashing", () => {
    const queryClient = new QueryClient();

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByTestId("loading")).toBeInTheDocument();
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

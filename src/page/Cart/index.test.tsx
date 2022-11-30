import { describe, vi, expect, afterEach, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

import { Cart } from "./index";
import { useCarts } from "@/hooks";

const mockedUseCardAll = useCarts as jest.Mock<any>;
vi.mock("../../hooks/useCarts");

describe("Page Cart", () => {
  beforeEach(() => {
    mockedUseCardAll.mockImplementation(() => ({ isLoading: true }));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const mockData = {
    product: [
      {
        img: "http://localhost:5173/img/camisa",
        title: "camisa",
        price: "100",
        description: "legal",
        _id: "1",
      },
    ],
    userId: "2",
  };

  it("should direct to product page", () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/card"]}>
          <Cart />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByRole("link")).toHaveAttribute("href", "/");
  });

  it("must show the subtotal", () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/card"]}>
          <Cart />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByTestId("subtotal")).toHaveTextContent("R$ 100");
  });

  it("must show the total price", () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/card"]}>
          <Cart />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByTestId("total")).toHaveTextContent("R$ 140");
  });
});

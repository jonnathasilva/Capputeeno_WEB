import { describe, vi, expect, afterEach, beforeEach } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { Header } from "./index";
import { useCarts } from "@/hooks";

const mockedUseCardAll = useCarts as jest.Mock<any>;
vi.mock("../../hooks/useCarts");

describe("Component Header", () => {
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

  it("should show cart value", () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Header />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByTestId("cartVelue")).toBeInTheDocument();
  });

  it("should redirect to cart page", () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Header />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByRole("link")).toHaveAttribute("href", "/cart");
  });

  it("should show modal", async () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Header />
        </MemoryRouter>
      </QueryClientProvider>
    );

    await userEvent.click(getByTestId("isModal"));

    expect(getByTestId("modal")).toHaveClass("flex");
  });

  it("should not show modal", () => {
    mockedUseCardAll.mockImplementation(() => ({
      isLoading: false,
      data: mockData,
    }));

    const queryClient = new QueryClient();

    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Header />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByTestId("modal")).toHaveClass("hidden");
  });
});

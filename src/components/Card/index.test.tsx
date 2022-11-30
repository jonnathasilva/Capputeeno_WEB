import { describe, expect, it, vi } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import { Card } from "./index";

describe("Component Card", () => {
  const data = {
    _id: "1",
    img: "https://localhost:3000/image",
    title: "camisa",
    description: "Boa camisa",
    price: "199",
  };

  it("should show image", () => {
    const queryClient = new QueryClient();

    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/cart"]}>
          <Card item={data} />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByRole("img")).toHaveAttribute("alt", "camisa");
    expect(getByRole("img")).toHaveAttribute(
      "src",
      "https://localhost:3000/image"
    );
  });

  it("should show title", () => {
    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/cart"]}>
          <Card item={data} />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByText("camisa")).toBeInTheDocument();
  });

  it("should show description", () => {
    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/cart"]}>
          <Card item={data} />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByText("Boa camisa")).toBeInTheDocument();
  });

  it("should show price", () => {
    const queryClient = new QueryClient();

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/cart"]}>
          <Card item={data} />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(getByText("R$ 199")).toBeInTheDocument();
  });
});

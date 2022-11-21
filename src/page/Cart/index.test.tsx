import { describe, vi, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Cart } from "./index";

describe("Page Cart", () => {
  const data = [
    {
      img: "http://localhost:5173/img/camisa",
      title: "camisa",
      price: "100",
      description: "legal",
      _id: "1",
    },
  ];

  it("should direct to product page", () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={["/card"]}>
        <Cart card={data} getAllCart={vi.fn} />
      </MemoryRouter>
    );

    expect(getByRole("link")).toHaveAttribute("href", "/");
  });

  it("must show the subtotal", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/card"]}>
        <Cart card={data} getAllCart={vi.fn} />
      </MemoryRouter>
    );

    expect(getByTestId("subtotal")).toHaveTextContent("R$ 100");
  });

  it("must show the total price", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/card"]}>
        <Cart card={data} getAllCart={vi.fn} />
      </MemoryRouter>
    );

    expect(getByTestId("total")).toHaveTextContent("R$ 140");
  });
});

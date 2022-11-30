import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import { Pagination } from "./index";

describe("Component Pagination", () => {
  const products = [
    {
      _id: "1",
      img: "https://localhost:3000/image",
      title: "camisa",
      description: "Boa camisa",
      price: "350",
    },
  ];

  it("should direct to product page", () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Pagination currentItens={products} page={1} />
      </MemoryRouter>
    );

    expect(getByRole("link")).toHaveAttribute("href", "/product/1");
  });

  it("should show image", () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Pagination currentItens={products} page={1} />
      </MemoryRouter>
    );

    expect(getByRole("img")).toHaveAttribute("alt", "camisa");
    expect(getByRole("img")).toHaveAttribute(
      "src",
      "https://localhost:3000/image"
    );
  });

  it("should show title", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Pagination currentItens={products} page={1} />
      </MemoryRouter>
    );

    expect(getByText("camisa")).toBeInTheDocument();
  });

  it("should show price", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Pagination currentItens={products} page={1} />
      </MemoryRouter>
    );

    expect(getByText("R$ 350")).toBeInTheDocument();
  });
});

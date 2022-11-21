import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { Header } from "./index";

describe("Component Header", () => {
  it("should show cart value", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Header cartLength={1} setCurrentPage={vi.fn} />
      </MemoryRouter>
    );

    expect(getByTestId("cartVelue")).toBeInTheDocument();
  });

  it("should not show cart value", () => {
    const { queryByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Header cartLength={0} setCurrentPage={vi.fn} />
      </MemoryRouter>
    );

    expect(queryByTestId("cartVelue")).not.toBeInTheDocument();
  });

  it("should redirect to cart page", () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Header cartLength={0} setCurrentPage={vi.fn} />
      </MemoryRouter>
    );

    expect(getByRole("link")).toHaveAttribute("href", "/cart");
  });

  it("should show modal", async () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Header cartLength={0} setCurrentPage={vi.fn} />
      </MemoryRouter>
    );

    await userEvent.click(getByTestId("isModal"));

    expect(getByTestId("modal")).toHaveClass("flex");
  });

  it("should not show modal", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Header cartLength={0} setCurrentPage={vi.fn} />
      </MemoryRouter>
    );

    expect(getByTestId("modal")).toHaveClass("hidden");
  });
});

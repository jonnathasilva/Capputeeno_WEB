import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { Header } from "./index";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: () => vi.fn(),
  Link: "Link",
}));

describe("Component Header", () => {
  it("should show cart value", () => {
    const { getByTestId } = render(
      <Header cartLength={1} setCurrentPage={vi.fn()} />
    );

    expect(getByTestId("cartVelue")).toBeInTheDocument();
  });

  it("should not show cart value", () => {
    const { queryByTestId } = render(
      <Header cartLength={0} setCurrentPage={vi.fn()} />
    );

    expect(queryByTestId("cartVelue")).not.toBeInTheDocument();
  });

  it("should redirect to cart page", () => {
    const { getByTestId } = render(
      <Header cartLength={0} setCurrentPage={vi.fn()} />
    );

    expect(getByTestId("Link")).toHaveAttribute("to", "/cart");
  });

  it("should show modal", async () => {
    const { getByTestId } = render(
      <Header cartLength={0} setCurrentPage={vi.fn()} />
    );

    await userEvent.click(getByTestId("isModal"));

    expect(getByTestId("modal")).toHaveClass("flex");
  });

  it("should not show modal", () => {
    const { getByTestId } = render(
      <Header cartLength={0} setCurrentPage={vi.fn()} />
    );

    expect(getByTestId("modal")).toHaveClass("hidden");
  });
});

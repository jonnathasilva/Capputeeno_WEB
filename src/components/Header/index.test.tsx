import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Header } from "./index";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: () => vi.fn(),
  Link: "Link",
}));

describe("Component Header", () => {
  it("should show cart value", () => {
    const { getByText, getByTestId } = render(
      <Header cartLength={1} setCurrentPage={vi.fn()} />
    );

    expect(getByText("1")).toBeInTheDocument();
    expect(getByTestId("Link")).toHaveAttribute("to", "/cart");
  });
});

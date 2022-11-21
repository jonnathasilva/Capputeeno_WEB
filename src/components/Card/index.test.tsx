import { describe, expect, it, vi } from "vitest";
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
    const { getByRole } = render(<Card item={data} getAllCart={vi.fn} />);

    expect(getByRole("img")).toHaveAttribute("alt", "camisa");
    expect(getByRole("img")).toHaveAttribute(
      "src",
      "https://localhost:3000/image"
    );
  });

  it("should show title", () => {
    const { getByText } = render(<Card item={data} getAllCart={vi.fn} />);

    expect(getByText("camisa")).toBeInTheDocument();
  });

  it("should show description", () => {
    const { getByText } = render(<Card item={data} getAllCart={vi.fn} />);

    expect(getByText("Boa camisa")).toBeInTheDocument();
  });

  it("should show price", () => {
    const { getByText } = render(<Card item={data} getAllCart={vi.fn} />);

    expect(getByText("R$ 199")).toBeInTheDocument();
  });
});

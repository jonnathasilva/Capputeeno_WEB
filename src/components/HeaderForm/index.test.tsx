import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { HeaderForm } from "./index";

describe("Component HeaderForm", () => {
  it("should show the inputs", () => {
    const { getByDisplayValue } = render(
      <HeaderForm search="camisa" setSearch={vi.fn()} submint={vi.fn()} />
    );

    expect(getByDisplayValue("camisa")).toBeInTheDocument();
  });
});

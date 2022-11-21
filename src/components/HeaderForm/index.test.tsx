import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";

import { HeaderForm } from "./index";

describe("Component HeaderForm", () => {
  it("should show the input value", () => {
    const { getByDisplayValue } = render(
      <HeaderForm search="camisa" setSearch={vi.fn} submint={vi.fn} />
    );

    expect(getByDisplayValue("camisa")).toBeInTheDocument();
  });

  it("should not show the input value", () => {
    const { queryByDisplayValue } = render(
      <HeaderForm search="xícara" setSearch={vi.fn} submint={vi.fn} />
    );

    expect(queryByDisplayValue("camisa")).not.toBeInTheDocument();
  });
});

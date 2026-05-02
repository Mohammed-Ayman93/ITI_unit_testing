import { render, screen, waitFor } from "@testing-library/react";
import { DataComponent } from "./DataComponent";
import { vi } from "vitest";
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
globalThis.fetch = vi.fn() as unknown as typeof fetch;

describe("DataComponent", () => {
  test("loading state", () => {
    (fetch as jest.Mock).mockReturnValue(new Promise(() => {}));

    render(<DataComponent />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("success state", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: () => Promise.resolve(["A", "B"]),
    });

    render(<DataComponent />);

    await waitFor(() => {
      expect(screen.getByText("A")).toBeInTheDocument();
    });
  });

  test("error state", async () => {
    (fetch as jest.Mock).mockRejectedValue("error");

    render(<DataComponent />);

    await waitFor(() => {
      expect(screen.getByText("Error occurred")).toBeInTheDocument();
    });
  });

  test("empty state", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: () => Promise.resolve([]),
    });

    render(<DataComponent />);

    await waitFor(() => {
      expect(screen.getByText("No Data")).toBeInTheDocument();
    });
  });
});

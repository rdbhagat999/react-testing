import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("SundaeApp", () => {
  test("initial condition: renders checkbox with a disabled confirm button", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });

    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });

    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });

  test("checkbox enables button on first click", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });

    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();
  });
});

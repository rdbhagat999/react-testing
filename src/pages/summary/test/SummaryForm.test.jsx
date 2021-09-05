import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();
  });

  test("popover responds to hover", async () => {
    render(<SummaryForm />);

    // [queryBy]Text when element can be removed from DOM
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    // [getBy]Text when element is visible and present in DOM
    const termsAndConditions = screen.getByText(/Terms and Conditions/i);
    userEvent.hover(termsAndConditions);

    // [getBy]Text when element is visible and present in DOM
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    userEvent.unhover(termsAndConditions);

    await waitForElementToBeRemoved(() =>
      // [queryBy]Text when element can be removed from DOM
      screen.queryByText(/no ice cream will actually be delivered/i)
    );
  });
});

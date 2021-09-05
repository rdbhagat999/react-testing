import { render, screen, fireEvent } from "@testing-library/react";
import FirstApp from "./components/FirstApp";

describe("firstApp", () => {
  test("renders learn react link", () => {
    render(<FirstApp />);

    // const linkElement = screen.getByText('Learn React');

    const linkElement = screen.getByRole("link", { name: "Learn React" });

    expect(linkElement).toBeInTheDocument();
  });

  test("button has correct initial color", () => {
    render(<FirstApp />);

    const btnElement = screen.getByRole("button", { name: "Change to blue" });

    expect(btnElement).toBeEnabled();

    expect(btnElement).toHaveStyle({ backgroundColor: "red" });
  });

  test("button turns blue when clicked", () => {
    render(<FirstApp />);

    const btnElement = screen.getByRole("button", { name: "Change to blue" });

    fireEvent.click(btnElement);

    expect(btnElement).toHaveStyle({ backgroundColor: "blue" });

    expect(btnElement).toHaveTextContent("Change to red");
  });

  test("disabled button turns gray", () => {
    render(<FirstApp />);

    const btnElement = screen.getByRole("button", { name: "Change to blue" });

    const checkboxElement = screen.getByRole("checkbox", {
      name: "Disable button",
    });

    expect(checkboxElement).not.toBeChecked();

    fireEvent.click(checkboxElement);

    expect(checkboxElement).toBeChecked();

    expect(btnElement).toBeDisabled();

    expect(btnElement).toHaveStyle({ backgroundColor: "gray" });
  });
});

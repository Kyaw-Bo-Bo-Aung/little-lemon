import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("does add HTML validation properly", () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText(/date/i);
  expect(dateInput).toHaveAttribute("required");
  expect(dateInput).toHaveAttribute("type", "date");
  const timeInput = screen.getByLabelText(/Choose time/i);
  expect(timeInput).toHaveAttribute("required");
});

test("allows the user to select a date", async () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText(/date/i);
  fireEvent.change(dateInput, { target: { value: "2025-02-10" } });
  expect(dateInput).toHaveValue("2025-02-10");
});


test("renders the form correctly", () => {
    const mockOnDateChange = jest.fn(); // Mock function
    const { container } = render(<BookingForm onDateChange={mockOnDateChange} />);
    expect(container).toMatchSnapshot();
});

test("displays an error message when no date is selected", async () => {
    render(<BookingForm />);
    const submitButton = screen.getByRole("button", { name: /Book/i });
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText("Please select date.");
    expect(errorMessage).toBeInTheDocument();
  });
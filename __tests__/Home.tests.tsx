import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />);
    const myElement = screen.getByText("Docs");
    expect(myElement).toBeInTheDocument();
  });

  it('should contains the text "information"', () => {
    render(<Home />);
    const myElement = screen.getByText(/information/i);
    expect(myElement).toBeInTheDocument();
  });
});

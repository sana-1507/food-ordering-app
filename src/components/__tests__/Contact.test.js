import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import React from "react";

describe("Run all Contact Us test cases", () => {
  test("Should load Contact Us Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should verify button in the Contact Component", () => {
    render(<Contact />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  test("Should verify button text in the Contact Component", () => {
    render(<Contact />);
    const btn = screen.getByText("Submit");
    expect(btn).toBeInTheDocument();
  });

  test("Should verify input placeholder 'Name' in the Contact Component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
  });

  test("Should load two input boxes and verify their length in the Contact Component", () => {
    render(<Contact />);
    const input1 = screen.getAllByRole("textbox");
    expect(input1).toHaveLength(2);
  });
});

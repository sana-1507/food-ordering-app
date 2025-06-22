import { render, screen } from "@testing-library/react";
import Header from "../Header";
import React from "react";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";

describe("Run all Header test cases", () => {
  test("Should load Login button ", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
    // const button = screen.getByRole("button")
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  // test("Should verify button in the Contact Component", () => {
  //   render(<Contact />);
  //   const btn = screen.getByRole("button");
  //   expect(btn).toBeInTheDocument();
  // });

  // test("Should verify button text in the Contact Component", () => {
  //   render(<Contact />);
  //   const btn = screen.getByText("Submit");
  //   expect(btn).toBeInTheDocument();
  // });

  // test("Should verify input placeholder 'Name' in the Contact Component", () => {
  //   render(<Contact />);
  //   const input = screen.getByPlaceholderText("Name");
  //   expect(input).toBeInTheDocument();
  // });

  // test("Should load two input boxes and verify their length in the Contact Component", () => {
  //   render(<Contact />);
  //   const input1 = screen.getAllByRole("textbox");
  //   expect(input1).toHaveLength(2);
  // });
});

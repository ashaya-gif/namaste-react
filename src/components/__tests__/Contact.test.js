import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Contact Us Page Test Cases", ()=> {
    //before each, before all, after each, after all are some of the fuctions you need to read about and you write all these functions to run before and after test cases, mostly used for clean up.
    beforeAll(() =>{
        console.log("Before Each");
    });
    
    afterAll(() => {
        console.log("After All");
    });


test("should load contact us component", () => {
    render(<Contact />);

    const heading  = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument();
});
test("should load button inside contact us component", () => {
    render(<Contact />);

    const button  = screen.getByRole("button");
    //assertion
    expect(button).toBeInTheDocument();
});
test("should load input name inside contact us component", () => {
    render(<Contact />);

    const inputName  = screen.getByPlaceholderText("name");
    //assertion
    expect(inputName).toBeInTheDocument();
});

});
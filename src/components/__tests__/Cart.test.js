import { fireEvent, render, screen } from "@testing-library/react";
//import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { Header } from "../header";
import Cart from "../Cart";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"


global.fetch = jest.fn(() =>
    Promise.resolve({
        json : ( )=> Promise.resolve(MOCK_DATA_NAME),
    })
);


it("should Load Restaurant Menu Component", async () => {
    await act(async () => render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
    </BrowserRouter>));

    const accordionHeader = screen.getByText("Starters (5)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    //const addBtns = screen.getAllByText("button", {name: "Add ﹢"});
    const addBtns = screen.getAllByText(/Add +/);


    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("foodItems").length).toBe(7);
    
    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));
    expect(screen.getAllByTestId("foodItems").length).toBe(5);
    expect(screen.getByText("Cart is empty. Please add items to you cart!")).toBeInTheDocument();
    
});
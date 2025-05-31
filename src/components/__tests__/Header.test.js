import { Provider } from "react-redux";
import { Header } from "../header";
import appStore from "../../utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
//import { MemoryRouter } from "react-router-dom";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"




it("Should render Header Componenet with a login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>    
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Componenet with a cart items 0", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>    
    );

    const cartItems = screen.getByText("Cart - (0 items)");

    expect(cartItems).toBeInTheDocument();
});

it("Should render Header Componenet with a cart item", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>    
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>    
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});


    expect(logoutButton).toBeInTheDocument();
});
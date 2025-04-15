import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/body";
import { Header } from "./components/header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";


const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet /> 
    </div>
  );
};//The above outlet when we import it it tells that whatever after / will be used in link this outlet will divert us there
//and since we are using this below header it is because we want all the routes below header only it should never be removed
// no matter on which page we go-> outlet will be replaced by about so you will not see it in html console 
const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <AppLayout />,
      children : [
        {
          path : '/about',
          element : <About />,
        },
        {
          path : '/grocery',
          element : <Suspense fallback={<h1>"Loading..."</h1>}><Grocery /></Suspense>,
        },
        {
          path : '/contact',
          element : <Contact />,
        },
        {
          path : '/',
          element: <Body />,
        },
        {
          path: '/restaurants/:resId',//the resId here tells about the id of different restaurants the id you put that restaurant will get open
          element: <RestaurantMenu />,
        },

      ],
      errorElement : <Error />,
    }, 
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


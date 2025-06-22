import React, { Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import ErrorHandler from "./components/ErrorHandler";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import('./components/Grocery')); 

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      name: "Sana"
    }
    setUserInfo(data.name)
  })

  return (
    <Provider store={appStore}>
   <UserContext.Provider value={{loggedinUser: userInfo, setUserInfo}}>
    <div
      className="app"
      style={{ fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif" }}
    >
      <Header />
      <Outlet />
    </div>
     </UserContext.Provider>
     </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
        {
            path: "/",
            element: <Body />,
            errorElement: <ErrorHandler />,
          },
      {
        path: "/about",
        element: <AboutUs />,
        errorElement: <ErrorHandler />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorHandler />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
        errorElement: <ErrorHandler />,
      },
      {
        path: "/cart",
        element: <Suspense fallback={<h1>Loading...</h1>}><Cart /></Suspense>,
        errorElement: <ErrorHandler />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
        errorElement: <ErrorHandler />,
      },
    ],
    errorElement: <ErrorHandler />
  },
]);

const root = createRoot(document.getElementById("root"));
// root.render(<AppLayout />)
root.render(<RouterProvider router={router} />);

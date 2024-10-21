import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./Context/ApiContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Product from "./components/Fisrt_page/OneProduct/Product.jsx";
import ShopProduct from "./components/Fisrt_page/Shop/ShopProduct.jsx";
import SignIn from "./components/Fisrt_page/Login/SignIn.jsx";
import SignUp from "./components/Fisrt_page/Login/SignUp.jsx";
import CheckOut from "./components/Fisrt_page/Checkout/CheckOut.jsx";
import { AuthProviderCart } from "./Context/CartContexte.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Facture from "./components/Fisrt_page/Facture/Facture.jsx";
import Contact from "./components/Fisrt_page/ContacUs/Contact.jsx";
import Profile from "./components/Fisrt_page/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Product/:id",
    element: <Product />,
  },
  {
    path: "/Shop",
    element: <ShopProduct />,
  },
  {
    path: "/Shop/:id",
    element: <ShopProduct />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Checkout",
    element: <CheckOut />,
  },
  {
    path: "/Facture/:id",
    element: <Facture />,
  },
  {
    path: "/Contact us",
    element: <Contact />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
]);
const queryClient = new QueryClient();
const PUBLIC_KEY =
  "pk_test_51OxYmL1D2gj5qMyIzjopCJwbUzmsZWYVoJWROPcIumYMRJc45YhuojokBcqdHkHls16a4xZamDYB8bFhbKngWJbp00FH7Pj8BF";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviderCart>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Elements stripe={stripeTestPromise}>
            <RouterProvider router={router} />
          </Elements>
        </QueryClientProvider>
      </AuthProvider>
    </AuthProviderCart>
  </StrictMode>
);

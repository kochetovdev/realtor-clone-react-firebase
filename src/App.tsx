import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RootLayout from "./RootLayout";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";

const clientRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "offers", element: <Offers /> },
      { path: "create-listing", element: <CreateListing /> },
      {
        path: "profile",
        element: <PrivateRoute />,
        children: [{ index: true, element: <Profile /> }],
      },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={clientRouter} />;
}

export default App;

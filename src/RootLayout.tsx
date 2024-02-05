import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Toaster from "./components/Toaster";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster />
    </>
  );
};

export default RootLayout;

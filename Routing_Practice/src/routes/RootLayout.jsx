import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

function RootLayout() {
  return (
    <>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

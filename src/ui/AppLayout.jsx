import { Outlet } from "react-router";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid min-h-screen  grid-rows-[1fr_auto] bg-[#111827] text-[#fff]">
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;

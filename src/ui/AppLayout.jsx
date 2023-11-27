import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid min-h-screen  grid-rows-[auto_1fr_auto] bg-[#191414] text-[#fff]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;

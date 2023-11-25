import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid min-h-screen  grid-rows-[auto_1fr_auto] bg-stone-800 text-slate-100">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;

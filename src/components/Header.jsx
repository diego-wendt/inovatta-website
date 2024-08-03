import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import { NavigationBar } from "./NavigationBar";
import Logo from "../assets/logo.svg";

export const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <div className="container absolute z-10 mb-3 flex items-center gap-6 rounded-b-3xl border-4 border-t-0 border-primary bg-neutral-100/90 px-8 py-6 sm:mx-auto md:p-6 xl:max-w-6xl">
        <div className="center grow md:grow-0">
          <img
            className="max-h-16"
            src={Logo}
            alt="Logo Inovatta Contabilidade"
          />
        </div>
        <div className="md:hidden">
          <button className="text-primary" onClick={toggleNavbar}>
            {mobileDrawerOpen ? (
              <X className="size-12" />
            ) : (
              <Menu className="size-12" />
            )}
          </button>
        </div>
        {!mobileDrawerOpen && <NavigationBar />}
      </div>
      {mobileDrawerOpen && <MobileDrawer />}
    </>
  );
};

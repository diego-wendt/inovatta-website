import { NavLink } from "react-router-dom";
import { NavItems } from "../dados/Dados";

const MobileDrawer = () => {
  return (
    <ul className="absolute top-[18vh] z-20 flex w-full flex-col items-center justify-around gap-3 rounded-lg bg-neutral-100/80 py-4 text-center md:hidden">
      {NavItems.map((item, index) => {
        return (
          <NavLink
            key={index}
            className={({ isActive }) => {
              return isActive
                ? "w-3/4 rounded-lg bg-primary p-1 text-lg font-semibold text-neutral-100"
                : "rounded-lg p-1 text-lg font-semibold text-neutral-900 hover:bg-primary-light2 hover:text-neutral-100";
            }}
            to={item.href}
          >
            <li>{item.label}</li>
          </NavLink>
        );
      })}
    </ul>
  );
};

export default MobileDrawer;

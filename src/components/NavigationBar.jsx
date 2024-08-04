import { NavLink } from "react-router-dom";
import { NavItems } from "../dados/Dados";

export const NavigationBar = () => {
  return (
    <ul className="hidden grow justify-end gap-3 px-3 text-center md:flex">
      {NavItems.map((item, index) => {
        return (
          <NavLink
            key={index}
            className={({ isActive }) => {
              return isActive
                ? "rounded-lg bg-primary p-2 text-base font-semibold text-neutral-100"
                : "rounded-lg p-2 text-base font-semibold text-gray-900 hover:bg-primary hover:text-neutral-100";
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

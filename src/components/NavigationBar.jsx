import { NavItems } from "../dados/Dados";

export const NavigationBar = () => {
  return (
    <ul className="hidden grow justify-end gap-3 px-3 text-center md:flex">
      {NavItems.map((item, index) => {
        return (
          <li
            key={index}
            className="rounded-lg p-2 text-base font-semibold text-gray-900 hover:bg-primary hover:text-neutral-100"
          >
            <a href={item.href}>{item.label}</a>
          </li>
        );
      })}
    </ul>
  );
};

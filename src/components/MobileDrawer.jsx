import { NavItems } from "../dados/Dados";

const MobileDrawer = () => {
  return (
    <ul className="absolute top-[18vh] z-20 flex w-full flex-col items-center justify-around gap-3 rounded-lg bg-neutral-100/80 py-4 text-center md:hidden">
      {NavItems.map((item, index) => {
        return (
          <li className="rounded-lg p-1 w-3/4 text-lg font-semibold text-neutral-900 hover:bg-primary hover:text-neutral-100" key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default MobileDrawer;

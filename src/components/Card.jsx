import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export const Card = ({ props, sendDataToParent, activeCard }) => {
  const [cardIsOpen, setCardIsOpen] = useState(false);

  function handleClick(data) {
    setCardIsOpen(!cardIsOpen);
    sendDataToParent(data);
  }

  useEffect(() => {
    if (cardIsOpen && activeCard != props.titulo) {
      setCardIsOpen(false);
    }
  }, [activeCard]);

  return (
    <>
      <div
        onClick={() => {
          handleClick(props);
        }}
        className={`"flex hover:bg-primary-dark3" flex-col rounded-xl border-2 border-primary text-center ${activeCard == props.titulo && cardIsOpen ? "bg-primary-dark1 " : ""}`}
      >
        <div className="flex flex-col content-center gap-2 p-4 text-center text-neutral-200">
          <p className="text-xl font-bold">{props.titulo}</p>

          {cardIsOpen && (
            <>
              <div className="block sm:hidden">
                <p className="p-4">{props.descricao}</p>
                <ul className="flex flex-col gap-4">
                  {props.servicos.map((item, index) => (
                    <li className="flex items-center px-4" key={index}>
                      <svg className="h-6 w-6 flex-none fill-primary stroke-primary-light4 stroke-2">
                        <circle cx="12" cy="12" r="11" />
                        <path
                          d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                          fill="none"
                        />
                      </svg>
                      <p className="pl-8 text-left">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

import { useState } from "react";
import { Solucoes } from "../dados/Dados";
import { Card } from "./Card";

export const Servicos = () => {
  const [listIsOpen, setListIsOpen] = useState(false);
  const [dadoCard, setDadoCard] = useState({ titulo: "" });

  function handleDataFromChild(data) {
    handleIsListOpen(data);
    setDadoCard(data);
  }

  function handleIsListOpen(data) {
    data.titulo == dadoCard.titulo
      ? setListIsOpen(!listIsOpen)
      : setListIsOpen(true);
  }

  return (
    <div id="solucoes" className="flex flex-col bg-black">
      <div className="bg-primary">
        <p className="py-2 text-center text-xl font-semibold text-neutral-200">
          SERVIÇOS
        </p>
      </div>
      <div className="mx-auto h-full w-full lg:max-w-screen-lg xl:max-w-screen-lg">
        <div className="flex flex-col bg-primary-dark5">
          <div>
            <p className="py-3 text-center text-neutral-200">
              Oferecemos uma gama completa de serviços contábeis para atender às
              necessidades de sua empresa:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 px-2 pb-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2">
            {Solucoes.map((item, index) => {
              return (
                <Card
                  key={index}
                  props={item}
                  sendDataToParent={handleDataFromChild}
                  activeCard={dadoCard.titulo}
                />
              );
            })}
          </div>
        </div>
        {listIsOpen && (
          <div className="hidden gap-3 bg-primary-dark5 px-2 pb-3 sm:flex">
            <div className="flex w-full rounded-xl border-2 border-primary bg-primary-dark4 p-5 text-gray-100">
              <div className="basis-1/2 text-justify">{dadoCard.descricao}</div>

              <ul className="flex basis-1/2 flex-col gap-4">
                {dadoCard.servicos.map((item, index) => (
                  <li className="flex items-center px-4" key={index}>
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                    </svg>
                    <p className="pl-3">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

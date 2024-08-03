import { dadosEmpresa } from "./../dados/Dados";
import Logo from "../assets/logo-branco.svg";
import { IconFacebook } from "./icons/IconFacebook";
import { IconWhatsapp } from "./icons/IconWhatsapp";
import { IconInstagram } from "./icons/IconInstagram";
import { AtSign, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  // v/ para gerar a conversa do whatsapp
  // img src="https://fakeimg.pl/400x100/?text=LOGO INOVATTA&font=arial"
  const linkPhone = `tel:+${dadosEmpresa.telefone}`;
  const linkMail = `mailto:${dadosEmpresa.email}`;

  return (
    <footer
      id="contato"
      className="md:px-auto flex min-h-screen w-full flex-col items-center justify-evenly py-0 sm:min-h-full sm:flex-row"
    >
      <div className="just flex w-full grow flex-col justify-around sm:h-full md:flex-col-reverse">
        <div className="bg-primary-dark5 flex grow">
          <div className="mx-auto flex grow flex-col items-center justify-evenly sm:flex-row sm:px-5 md:flex-row md:justify-between lg:max-w-screen-md lg:px-0 xl:max-w-screen-lg">
            <div className="sm:flex-initia">
              <img
                className="px-5 sm:h-14 sm:px-0"
                src={Logo}
                alt="Logo Inovatta Contabilidade"
              />
            </div>
            <div className="sm:bg-primary-dark5 flex w-full shrink-0 flex-col gap-3 bg-primary py-3 sm:w-auto">
              <p className="text-center text-2xl font-medium text-neutral-100">
                SIGA-NOS
              </p>

              <div className="flex justify-center gap-8 sm:gap-5">
                <a href="https://www.facebook.com/inovattacontabilidade">
                  <IconFacebook />
                </a>

                <a href="https://api.whatsapp.com/send/?phone=5548920014784&text=Ol%C3%A1.%20Gostaria%20de%20entrar%20em%20contato.">
                  <IconWhatsapp />
                </a>
                <a href="https://www.instagram.com/inovattacontabilidade">
                  <IconInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="bg-primary py-2 text-center text-2xl font-medium text-neutral-100">
            FALE CONOSCO
          </p>
          <div className="bg-neutral-100">
            <div className="mx-auto flex flex-col gap-3 pb-10 pl-5 pt-5 text-base font-normal text-neutral-800 md:container sm:font-normal md:pl-0 lg:max-w-screen-md xl:max-w-screen-lg">
              <div className="flex items-center gap-2">
                <Phone className="size-7 text-primary" />
                <p>
                  <a href={linkPhone}>{dadosEmpresa.telefoneMask}</a>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <AtSign className="size-7 text-primary" />
                <p>
                  <a href={linkMail}>{dadosEmpresa.email}</a>{" "}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="size-7 text-primary" />

                <div className="flex flex-col md:flex-row">
                  <a href="https://maps.app.goo.gl/VEnKFosdebmsm8E77">
                    {/* celular */}
                    <p className="sm:hidden">
                      {dadosEmpresa.rua}, {dadosEmpresa.numero}
                    </p>
                    <p className="sm:hidden">
                      {dadosEmpresa.complemento} - {dadosEmpresa.bairro}
                    </p>
                    <p className="sm:hidden">
                      {dadosEmpresa.cidade} - {dadosEmpresa.estado}
                    </p>
                    <p className="sm:hidden">{dadosEmpresa.cep}</p>

                    {/* tablet */}
                    <p className="hidden sm:block lg:hidden">
                      {dadosEmpresa.rua}, {dadosEmpresa.numero} -{" "}
                      {dadosEmpresa.complemento} - {dadosEmpresa.bairro}
                    </p>
                    <p className="hidden sm:block lg:hidden">
                      {dadosEmpresa.cidade} - {dadosEmpresa.estado} -{" "}
                      {dadosEmpresa.cep}
                    </p>

                    {/* desktop */}
                    <p className="hidden lg:block">
                      {dadosEmpresa.rua}, {dadosEmpresa.numero} -{" "}
                      {dadosEmpresa.complemento} - {dadosEmpresa.bairro},{" "}
                      {dadosEmpresa.cidade} - {dadosEmpresa.estado} -{" "}
                      {dadosEmpresa.cep}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

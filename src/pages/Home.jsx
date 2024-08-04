import { Hero } from "../components/Hero";
import { QuemSomos } from "../components/QuemSomos";
import { Servicos } from "../components/Servicos";

export const Home = () => {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <QuemSomos />
      <Servicos />
    </main>
  );
};

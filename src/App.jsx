import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { QuemSomos } from "./components/QuemSomos";
import { Servicos } from "./components/Servicos";

function App() {
  return (
    <div className="font-roboto flex min-h-screen w-full flex-col items-center">
      <Header></Header>
      <Hero></Hero>
      <main className="flex w-full flex-col">
        <QuemSomos></QuemSomos>
        <Servicos></Servicos>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

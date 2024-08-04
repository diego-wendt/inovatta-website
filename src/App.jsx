import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center font-roboto justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

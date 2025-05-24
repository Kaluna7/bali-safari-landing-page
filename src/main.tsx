import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="overflow-y-auto overflow-x-hidden">
      <Home />
      <About />
    </div>
  </StrictMode>,
);

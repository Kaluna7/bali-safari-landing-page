import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/Home.tsx";
import FeaturesAnimals from "./pages/Features Animals/FeaturesAnimals.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="overflow-y-auto overflow-x-hidden">
      <Home />
      <div className="mt-50">
              <FeaturesAnimals />
      </div>
    </div>
  </StrictMode>,
);

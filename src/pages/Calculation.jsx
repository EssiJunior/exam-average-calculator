// REACT IMPORTS

// ASSETS
import { calculator, processing, uy1 } from "../assets";

import "../styles/template.css";
import { useState } from "react";

function Calculation() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <main className="template md:h-dvh w-full grid md:grid-rows-1 grid-cols-1 md:grid-cols-[1.5fr_2fr] bg-white text-black max-md:font-black relative overflow-hidden">
      {/* Texts */}
      <div className="overflow-auto flex justify-start items-center max-md:h-dvh mobile-template max-md:p-5">
        <div className="p-5 flex flex-col justify-center items-start gap-10 max-md:backdrop-blur-md max-md:bg-white/40 max-md:w-full rounded">
          <p>
            Allright, let's do this! <span className="motion-emoji">🤓</span>
          </p>
          <p className="">
            Choose a{" "}
            <span className="font-black md:text-[45px] sm:text-[35px] text-[25px] gradient__text">
              Calculation
            </span>
          </p>
        </div>
      </div>

      {/* Illustration */}
      <div className="hidden md:flex justify-center items-center bg-secondary/20">
        <img
          src={processing}
          alt="home"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
    </main>
  );
}

export default Calculation;

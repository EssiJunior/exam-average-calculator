// REACT IMPORTS

// ASSETS
import { useParams } from "react-router-dom";
import { info, calculation } from "../assets";

import "../styles/calculation.css";
import { calculatorDataByTemplate } from "../utils/data";
import Button from "../components/Button";

function Calculation() {
  const params = useParams();
  const data = calculatorDataByTemplate[params.id];

  console.log(data);

  return (
    <main className="template md:h-dvh w-full grid md:grid-rows-1 grid-cols-1 md:grid-cols-[1.5fr_2fr] bg-white text-black max-md:font-black relative overflow-hidden">
      {/* Texts */}
      <div className="overflow-auto flex justify-start items-center max-md:h-dvh mobile-calculation max-md:p-5">
        <div className="p-5 flex flex-col justify-center items-start gap-2 max-md:backdrop-blur-md max-md:bg-white/40 max-md:w-full rounded">
          <p>
            Here we go ! <span className="motion-emoji">🤓</span>
          </p>
          <p className="mt-8">You choosed</p>
          <p className="flex gap-2 relative">
            <span className="overflow-hidden whitespace-nowrap text-ellipsis font-black md:text-[35px] text-[25px] gradient__text ">
              {data.title}
            </span>

            <span className="tooltip inline-flex items-center justify-center cursor-pointer">
              <img
                src={info}
                alt="info"
                className="w-5 hover:opacity-80 transition-opacity"
              />
              <span className="tooltip-text absolute -right-5 bottom-[calc(100%+10px)]">
                {data.description}
              </span>
            </span>
          </p>

          {/* Action */}
          <div className="flex mt-10">
            <Button text={"Calculate my average !"} handleClick={() => {}} />
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div className="hidden md:flex justify-center items-center bg-secondary/20">
        <img
          src={calculation}
          alt="home"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
    </main>
  );
}

export default Calculation;

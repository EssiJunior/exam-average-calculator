// REACT IMPORTS
import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router-dom";

// COMPONENTS AND UTILITIES
import withSplashScreen from "../hoc/withSplashScreen";
import { defaultOptions } from "../utils";
import Button from "../components/Button";

// ASSETS
import {
  calculate,
  calculator,
  calculatorWhite,
  calculatorBlack,
} from "../assets";

// STYLES
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home h-dvh w-full grid lg:grid-rows-1 grid-cols-1 lg:grid-cols-[1.5fr_2fr] bg-white text-black relative overflow-hidden">
      <div className="p-5 flex flex-col justify-center items-start gap-10 order-2 lg:order-1">
        <p>
          Hey <span className="salute-emoji">🫡</span>
        </p>
        <p className="">
          You're on{" "}
          <span className="font-black md:text-[45px] sm:text-[35px] xs:text-[25px] gradient__text">
            Scoreify
          </span>
        </p>
        <div className="divider"></div>
        <p>
          You want to be sure of <span className="gradient__text">your average</span> ? You want to determine it before
          your school does ?
        </p>
        <p>
          Scoreify does it for you. <span className="emoji">😎</span>
        </p>
        <div className="flex gap-4">
          <Button
            text="Get started"
            handleClick={() => navigate("/management")}
          />
          <Button text="Sign In" handleClick={() => navigate("/signin")} />
        </div>
      </div>
      <div className="flex justify-center items-center bg-secondary/20 order-1 lg:order-2">
        <Lottie
          options={defaultOptions(calculate)}
          speed={0.5}
          height={"70%"}
          width={"70%"}
        />
      </div>

      <div className="absolute -top-1/4 -left-1/6 w-2/3 aspect-square border border-secondary/80 rounded-full ">
        <div className="orbit relative h-full rounded-full ">
          <img
            src={calculatorBlack}
            alt="bulb"
            className="absolute right-0 bottom-[240px] w-[85px]"
          />
        </div>
      </div>
      <div className=" absolute -top-[40px] -left-[75px] w-1/2 aspect-square border border-primary rounded-full">
        <div className="orbit relative h-full rounded-full ">
          <img
            src={calculator}
            alt="calculator"
            className="absolute right-[50px] top-[100px] w-[75px]"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
// export default withSplashScreen(Home);

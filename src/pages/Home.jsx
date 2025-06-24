// REACT IMPORTS
import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router-dom";

// COMPONENTS AND UTILITIES
import withSplashScreen from "../hoc/withSplashScreen";
import { defaultOptions } from "../utils";
import Button from "../components/Button/Button";

// ASSETS
import { calculate } from "../assets";

// STYLES
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home h-dvh w-full relative grid grid-cols-1 lg:grid-cols-[1.5fr_2fr]">
      <div className="introduction">
        <p>
          Hey <span className="salute-emoji">🫡</span>
        </p>
        <p className="">
          You're on <span className="font-black md:text-[45px] sm:text-[35px] xs:text-[25px] gradient__text">Scoreify</span>
        </p>
        <div className="divider"></div>
        <p>
          You want to be sure of your average ? You want to determine it before
          your school does ?
        </p>
        <p>
          Scoreify does it for you. <span className="emoji">😎</span>
        </p>
        <div className="flex gap-4">
          <Button text="Get started" handleClick={() => navigate('/management')}/>
          <Button text="Sign In" handleClick={() => navigate('/signin')} />
        </div>
      </div>
      <div className="illustration bg-secondary/20">
        <Lottie
          options={defaultOptions(calculate)}
          speed={0.5}
          height={"70%"}
          width={"70%"}
        />
      </div>
    </main>
  );
}

export default Home;
// export default withSplashScreen(Home);

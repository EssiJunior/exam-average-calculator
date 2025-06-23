// REACT IMPORTS
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

// COMPONENTS AND UTILITIES
import withSplashScreen from "../hoc/withSplashScreen";
import { defaultOptions } from "../utils";
import Button from "../components/Button/Button";

// ASSETS
import { calculate } from "../assets";

// STYLES
import "../styles/home.css";

function Home() {
  return (
    <main className="home h-dvh w-full relative grid grid-cols-1 lg:grid-cols-[1.5fr_2fr]">
      <div className="introduction">
        <p>
          Hey <span>🫡</span>
        </p>
        <p className="gradient__text">
          You're on <code>Scoreify</code>
        </p>
        <div className="divider"></div>
        <p>
          You want to be sure of your average ? You want to determine it before
          your school does ?
        </p>
        <p>
          Scoreify does it for you. <span>😎</span>
        </p>
        <div className="wrapper">
          <Button />

          {/* <Link className="btn" to="/management">
            Get started
          </Link>
          <Link className="btn" to="/signin">
            Sign In
          </Link> */}
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

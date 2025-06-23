// REACT IMPORTS
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

// COMPONENTS AND UTILITIES
import withSplashScreen from "../hoc/withSplashScreen";
import { defaultOptions } from "../utils";

// ASSETS
import lottie from "../assets/lotties/task1.json";

// STYLES
import "../styles/home.css";

function Home() {
  return (
    <main className="home h-dvh w-dvw relative grid grid-cols-2">
      <div className="introduction">
        <div className="first" />
        <h1 className="gradient__text">
          Welcome on
          <br />
          <code>Scoreify</code>
        </h1>
        <div className="divider"></div>
        <p>
          In this plateform, you will manage your tasks very easily. This stuff
          of recording some important tasks indeed has all its importance, for
          that we offer you a great user experience.
        </p>
        <div class="wrapper">
          <Link class="btn" to="/management">
            Get started
          </Link>
          <Link class="btn" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
      <div className="illustration">
        <Lottie
          options={defaultOptions(lottie)}
          speed={0.5}
          height={'80%'}
          width={'80%'}
        />
      </div>
    </main>
  );
}

export default withSplashScreen(Home);

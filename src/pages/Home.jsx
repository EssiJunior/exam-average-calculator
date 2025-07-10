// REACT IMPORTS
import { useNavigate } from "react-router-dom";

// COMPONENTS AND UTILITIES
import withSplashScreen from "../hoc/withSplashScreen";
import Button from "../components/Button";

// ASSETS
import { home } from "../assets";

// STYLES
import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home md:h-dvh w-full grid md:grid-rows-1 grid-cols-1 md:grid-cols-[1.5fr_2fr] bg-white text-black max-md:text-white relative overflow-hidden">
      {/* Texts */}
      <div className="flex justify-center items-center max-md:h-dvh mobile-home max-md:p-5">
        <div className="blur-card p-5 flex flex-col justify-center items-start gap-10 max-md:backdrop-blur-sm max-md:bg-black/40 max-md:w-[calc(100%-40px)] rounded-4xl">
          <p>
            Hey <span className="motion-emoji">🫡</span>
          </p>
          <p className="">
            You're on{" "}
            <span className="font-black md:text-[45px] sm:text-[35px] text-[25px] gradient__text">
              Scoreify
            </span>
          </p>
          <p>
            You want to be sure of{" "}
            <span className="gradient__text">your average</span> ? You want to
            determine it before your school does ?
          </p>
          <p>
            Scoreify does it for you. <span className="emoji">😎</span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Button
              text="Get started"
              handleClick={() => navigate("/template")}
            />
            <Button text="Sign In" handleClick={() => navigate("/signin")} />
          </div>
        </div>

        {/* <div className="card">
          <div>
            <h1>Refer and Earn</h1>
            <p>Refer Friends, Earn Points and Fees</p>
          </div>

          <div class="rewards">
            <p>
              <span class="text-accent">20%</span> Platform Fees +
              <span class="text-accent">10%</span> Extra points
            </p>
          </div>
        </div> */}
      </div>

      {/* Illustration */}
      <div className="hidden md:flex justify-center items-center bg-secondary/20">
        <img
          src={home}
          alt="home"
          className="w-[100%] h-[100%] object-cover"
          loading="lazy"
        />
      </div>
    </main>
  );
}

export default Home;
// export default withSplashScreen(Home);
// export default withSplashScreen(Home);

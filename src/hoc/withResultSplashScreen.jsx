// REACT IMPORTS
import { Component } from "react";

// COMPONENTS
import Loader from "../components/Loader/Loader";

// STYLE
import "./splash_screen.css";

// ASSETS
import { logo } from "../assets";
import { useEffect } from "react";
import { useState } from "react";

const SplashContent = () => {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative splash w-screen h-dvh flex flex-col items-center justify-center bg-secondary">
      <img src={logo} alt="logo" loading="lazy" />
      <h2>Result is loading...</h2>

      {!showContent && <Loader />}

      <div className="absolute top-5 right-5 text-white/60">
        Developed with love by <a href="https://essijunior.com" className="text-white">@essijunior</a>
      </div>
    </div>
  );
};

export default function withResultSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        // Put here your await requests/ API requests
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 10000); // 10 seconds
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return <SplashContent />;

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

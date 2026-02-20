// REACT IMPORTS
import { useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from 'lenis/react';
import { cancelFrame, frame } from 'motion/react';

// CUSTOMISED CONTAINERS
import AnimatedRoutes from "./containers/AnimatedRoutes";

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    function update(data) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>

      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
    </>
  );
}

export default App;

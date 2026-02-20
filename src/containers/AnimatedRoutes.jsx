// REACT COMPONENTS IMPORTS
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

// PAGES
const Home = lazy(() => import("@/pages/Home"));
const Template = lazy(() => import("@/pages/Template"));
const Calculation = lazy(() => import("@/pages/Calculation"));
const Result = lazy(() => import("@/pages/Result"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const InDevelopment = lazy(() => import("@/pages/InDevelopment"));

// COMPONENTS
import PageLoader from "@/containers/PageLoader";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Navigate to="/notfound" replace />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="/template" element={<Template />} />
          <Route path="/calculation/:id" element={<Calculation />} />
          <Route path="/result" element={<Result />} />
          <Route path="/signup" element={<InDevelopment />} />
          <Route path="/signin" element={<InDevelopment />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

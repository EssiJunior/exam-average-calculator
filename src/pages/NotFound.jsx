// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { motion } from "framer-motion";


function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-4 text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="text-9xl font-bold text-secondary mb-4">404</div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Oops! Page Not Found
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center text-black/50">
          <Link to="/">
            <Button
              text="Back to Home"
            />
          </Link>
        </div>

      </motion.div>
    </div>
  );
}

export default NotFound;

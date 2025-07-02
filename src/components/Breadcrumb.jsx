import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Breadcrumb = ({ items = [], className }) => {
  const breadcrumbRef = useRef(null);

  // Initialize Lordicon
  useEffect(() => {
    if (window.loadLordIcon) {
      window.loadLordIcon();
    }
  }, []);

  return (
    <nav className={className} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse border-b border-primary/40 p-2">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center ">
            <div className="flex items-center">
              {item.href ? (
                <Link
                  to={item.href}
                  className={`text-sm font-medium ${
                    index === items.length - 1
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`text-sm ${
                    index === items.length - 1
                      ? "text-gray-500 dark:text-gray-400"
                      : "text-gray-700 dark:text-gray-400"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

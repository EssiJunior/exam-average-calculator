// ASSETS
import { logo } from "@/assets";

const PageLoader = () => {
  return (
    <div
      className="h-dvh bg-secondary md:h-screen w-full flex items-center justify-center"
    >
      <img
        src={logo}
        alt="Logo"
        loading="eager"
        width={160}
        height={160}
        className="animate-pulse"
      />
    </div>
  );
};

export default PageLoader;

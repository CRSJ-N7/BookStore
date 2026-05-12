import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
      console.log(window.scrollTo(0, 0));
    }, 1000);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;

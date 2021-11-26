import "./Footer.css";
import { themeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const Footer = () => {
  const { theme } = useContext(themeContext);

  return (
    <div
      className="footer"
      style={{
        color: theme === "lightMode" ? "black" : "white",
        backgroundColor: theme === "lightMode" ? "white" : "black",
      }}
    >
      My Footer
    </div>
  );
};

export default Footer;

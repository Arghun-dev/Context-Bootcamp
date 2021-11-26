import "./Header.css";
import { useContext } from "react";
import { themeContext } from "../../context/ThemeContext";
import { Switch } from "antd";

const Header = () => {
  const { theme, setTheme } = useContext(themeContext);

  const handleCheck = (checked) => {
    if (checked) {
      setTheme("lightMode");
    } else {
      setTheme("darkMode");
    }
  };

  return (
    <div
      className="header"
      style={{
        color: theme === "lightMode" ? "black" : "white",
        backgroundColor: theme === "lightMode" ? "white" : "black",
        boxShadow: `2px 4px 6px ${theme === "ligh"}`,
      }}
    >
      My Header
      <Switch
        style={{ position: "absolute", right: 10 }}
        checked={theme === "lightMode" ? true : false}
        onChange={handleCheck}
      />
    </div>
  );
};

export default Header;

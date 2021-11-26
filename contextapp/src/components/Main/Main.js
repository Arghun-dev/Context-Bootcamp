import { useContext, useState } from "react";
import { themeContext } from "../../context/ThemeContext";
import MyModal from "../MyModal";
import "./Main.css";

const Main = () => {
  const { theme } = useContext(themeContext);
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="main"
      style={{
        color: theme === "lightMode" ? "black" : "white",
        backgroundColor: theme === "lightMode" ? "white" : "black",
      }}
    >
      {" "}
      bhjdbajd dcskjkjnd kjjs kjkljljlk kjjkcskls lkjsfhkjxs fsdjknkj
      <button onClick={() => setShowModal(true)}>show modal</button>
      <MyModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Main;

import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;

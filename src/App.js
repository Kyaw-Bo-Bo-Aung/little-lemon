import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;

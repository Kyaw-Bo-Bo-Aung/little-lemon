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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

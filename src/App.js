import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Users from "./components/Users";
import ErrorBound from "./components/ErrorBound";
import ErrorHandler from "./components/ErrorBound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            Home page
          </Route>
          <Route path="/About" element={<About />}>
            About page
          </Route>
          <Route path="/Login" element={<Login />}>
            Login Page
          </Route>
          <Route path="/SignUp" element={<SignUp />}>
            SignUp Page
          </Route>
          <Route path="/Users" element={<Users />}>
            USers Page
          </Route>
        </Routes>
      </Router>
      <ErrorHandler>
        <ErrorBound />
      </ErrorHandler>
    </div>
  );
}

export default App;

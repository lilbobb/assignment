import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Users from "./components/Users";
import ErrorHandler from "./components/ErrorBound";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <ErrorHandler>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Users" element={<Users />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </ErrorHandler>
    </div>
  );
}

export default App;

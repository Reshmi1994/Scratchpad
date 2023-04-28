import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Calci from "./pages/calci";
import Testing from "./pages/testing";
import Project from "./pages/project";
import Welcome from "./pages/welcome";
import Dummy from "./pages/dummy";
import Counter from "./pages/counter";
import Login_Class from "./pages/login_class";
import Welcome_Class from "./pages/welcome_class";
import Counter_Class from "./pages/counter_class";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";
import Login2 from "./pages/login2";
import Comments from "./pages/comments";
import Program from "./pages/program";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Calci" element={<Calci />} />
        <Route path="Testing" element={<Testing />} />
        <Route path="Project" element={<Project />} />
        <Route path="Welcome" element={<Welcome />} />
        <Route path="Dummy" element={<Dummy />} />
        <Route path="Counter" element={<Counter />} />
        <Route path="Login_Class" element={<Login_Class />} />
        <Route path="welcome_Class" element={<Welcome_Class />} />
        <Route path="Counter_Class" element={<Counter_Class />} />
        <Route path="Login2" element={<Login2 />} />
        <Route path="Comments" element={<Comments />} />
        <Route path="Program" element={<Program />} />
        <Route path="Program/:id" element={<Program />} />

      </Routes>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Login />
        <Signup />
        <Calci />
        <Testing />
        <Project />
        <Welcome />
        <Dummy />
        <Counter />
        <Login_Class />
        <Welcome_Class />
        <Counter_Class /> */}



        {/* <p>
          {" "}
          Reshmi Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </BrowserRouter>

  );
}

export default App;

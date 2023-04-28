import { Link } from "react-router-dom";
import "../css/navbar.css";
import Dummy from "./dummy";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {/* <a href="calci">Calci</a> */}
          <Link to={"/calci"}><i class="fa-solid fa-calculator"></i> Calci</Link>
        </li>
        <li>
          {/* <a href="Testing">Testing</a> */}
          <Link to={"/testing"}><i class="fa-solid fa-microscope"></i> Testing</Link>
        </li>
        <li>
          {/* <a href="Signup">Signup</a> */}
          <Link to={"/signup"}><i class="fa-solid fa-user-plus"></i> Signup</Link>
        </li>
        <li>
          {/* <a href="Login">Login</a> */}
          <Link to={"/login"}><i class="fa-solid fa-user"></i> Login</Link>
        </li>
        <li>
          {/* <a href="Project">Project</a> */}
          <Link to={"/project"}><i class="fa-solid fa-diagram-project"></i> project</Link>
        </li>
        <li>
          <Link to={"/dummy"}><i class="fa-solid fa-fire"></i> dummy</Link>
        </li>
        <li>
          <Link to={"/login_class"}><i class="fa-solid fa-lemon"></i> login_class</Link>
        </li>
        <li>
          <Link to={"/welcome_class"}><i class="fa-solid fa-door-open"></i> welcome_class</Link>
        </li>
        <li>
          <Link to={"/counter"}><i class="fa-solid fa-earth-oceania"></i> counter</Link>
        </li>
        <li>
          <Link to={"/counter_class"}><i class="fa-solid fa-globe"></i> Counter_Class</Link>
        </li>
        <li>
          <Link to={"/login2"}><i class="fa-regular fa-lemon"></i> login2</Link>
        </li>
        <li>
          <Link to={"/comments"}><i class="fa-regular fa-comment"></i> Comments</Link>
        </li>
        {/* <li>
          <Link to={"/program"}><i class="fa-brands fa-r-project"></i> Program</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;

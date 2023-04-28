import * as React from "react";
import "../css/signup.css";

function Signup() {
  return (
    <div className="testing">
      <div>Signup</div>
      <form>
        <div>
          <label className="error">Stud ID :</label>
          <input type="number" name="age" />
        </div>
        <div>
          <label id="first">Student Name :</label>
          <input onkeyup="helloWorld()" type="text" name="student name" />
        </div>
        <div>
          <label className="error">Class :</label>
          <input type="text" />
        </div>

        <div>
          <label className="error">Color Code :</label>
          <input type="color" />
        </div>
        <div>
          <label className="error">Date of Birth :</label>
          <input type="date" />
        </div>
        <div>
          <label className="error">Date Time :</label>
          <input type="datetime-local" />
        </div>

        <button type="button" onclick="Submit()">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Signup;

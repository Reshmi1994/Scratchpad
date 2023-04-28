import * as React from "react";
// import "../css/login.css";
import styles from '../css/login.module.css';
function Login() {
  return (
    <div className={styles.loginForm}>
      <form>
        <div>
          {/* <div style="background-color: yellow;"> */}
          {/* <div>
            <label className="error">Stud ID :</label>
            <input type="number" name="age" />
          </div> */}

          <div>
            <label className={styles.first}>userName :</label>
            {/* <input onkeyup="helloWorld()" type="text" name="student name" /> */}
            <input type="text" />
          </div>
          <div>
            <label className="error">password :</label>
            <input type="text" />
          </div>
        </div>
        {/* <div>
          <label className="error">Color Code :</label>
          <input type="color" />
        </div> */}
        {/* <div>
          <label className="error">Date of Birth :</label>
          <input type="date" />
        </div>
        <div>
          <label className="error">Date Time :</label>
          <input type="datetime-local" />
        </div>
        <div>
          <label className="error">EmailID :</label>
          <input type="email" />
        </div>
        <div>
          <label className="error">Document :</label>
          <input type="file" />
        </div>
        <div>
          <label className="error">Photo</label>
          <input type="image" />
        </div>
        <div>
          <label className="error">Month :</label>
          <input type="month" />
        </div>
        <div>
          <label className="error">Contact No. :</label>
          <input type="number" />
        </div>
        <div>
          <label className="error">link :</label>
          <input type="url" />
        </div> */}
        {/* <div>
          <label className="error">Reset</label>
          <input type="reset" />
        </div> */}

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

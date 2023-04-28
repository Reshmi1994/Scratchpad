import * as React from "react";
import styles from '../css/login2.css';
import axios from 'axios';
function Login2() {

    const loginfn = () => {
        // alert('login');
        // fetch('http://localhost:3001/users/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ userName: 'sefo', password: 'hahaha' })
        // }).then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         alert(data.data.message)
        //     })

        let userdata = { userName: 'sefo', password: 'hahaha' }
        axios.post('http://localhost:3001/users/login', userdata)
            .then(data => {
                console.log(data);
                const data1 = data.data.data;
                alert(data1.message)

                // alert(data.data.data.message)

            })
    }


    return (
        <div className={styles.loginForm}>


            <form>
                <div className="box">
                    <div>Sign Up</div>
                    <div>
                        <label className="design">userName :</label>
                        <input type="text" placeholder="Enter name" />
                    </div>
                    <div>
                        <label className="design">password :</label>
                        <input type="text" placeholder="Enter password" />
                    </div>
                    <div>
                        <button type="button" onClick={() => loginfn()}>Login</button>
                        <p className="forgot-password">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Login2;
import axios from "axios";
import * as React from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { serverUrl } from "../config";
import styles from '../css/program.css';
function Program() {
    const params = useParams()

    const [postId, setPostId] = React.useState(0)
    const [email, setEmail] = React.useState('')
    const [body, setBody] = React.useState('')
    const [name, setName] = React.useState('')

    React.useEffect(() => {
        console.log(params)
        if (params && params.id) {
            axios.get(serverUrl + 'comments/' + params.id).then(
                data => {
                    // alert(data.data.status)
                    Swal.fire(data.data.status)
                    let serverData = data.data.data;
                    console.log(data.data)
                    setPostId(serverData.postId)
                    setEmail(serverData.email)
                    setBody(serverData.body)
                    setName(serverData.name)
                }
            )
        }
    }, [])

    const submit = () => {
        let data = {
            postId: postId, email: email, body: body, name: name
        }
        console.log(data);
        if (params && params.id) {
            data = { ...data, _id: params.id }
            axios.put(serverUrl + 'comments', data).then(
                data => {
                    // alert(data.data.status)
                    Swal.fire(data.data.status)
                    setPostId(0)
                    setEmail('')
                    setBody('')
                    setName('')
                }
            )
        }
        else {
            axios.post(serverUrl + 'comments', data).then(
                data => {
                    // alert(data.data.status)
                    Swal.fire(data.data.status)
                    setPostId(0)
                    setEmail('')
                    setBody('')
                    setName('')
                }
            )
        }
    }

    return (
        <div>
            <style>{'body { background-color: beige; }'}</style>
            <form>
                <div className="box">
                    <div>Sample Form</div>
                    <div>
                        <label className="design">postId : </label>
                        <input type="number" value={postId} onChange={(e) => setPostId(e.target.value)} placeholder=" Enter ID " />
                    </div>
                    <div>
                        <label className="design">email : </label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Enter Email " />
                    </div>
                    <div>
                        <label className="design">body : </label>
                        <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder=" Enter " />
                    </div>
                    <div>
                        <label className="design">name : </label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder=" Enter name " />
                    </div>
                    <div>
                        <button type="reset"><i class="fa-solid fa-broom"></i> Reset </button>
                    </div>
                    <div>
                        <button type="button" onClick={() => submit()}><i class="fa-solid fa-person-walking-arrow-right"></i> Submit </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Program;
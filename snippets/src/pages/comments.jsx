import axios from "axios";
import * as React from "react";
import Table from "../components/table";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../config";

function Component() {
    let navigate = useNavigate();
    // Somewhere in your code, e.g. inside a handler:
    navigate("/posts");
}
// import styles from '../css/comments.css';
function Comments() {
    // const data = [];

    const [data, setData] = React.useState([]);

    const navigate = useNavigate();


    const getData = () => {
        axios.get(serverUrl + 'comments').then(
            data => {
                console.log(data.data) // fake site
                setData(data.data.data)
                //setData(data.data)
            }
        )
    }

    const onEdit = (eachRow) => {
        // alert('onEdit 2 ' + eachRow._id);

        navigate("/Program/" + eachRow._id);

    }
    const onDelete = (eachRow) => {
        // alert('onDelete 2 ' + eachRow._id);
        axios.delete(serverUrl + 'comments/' + eachRow._id).then(
            data => {
                // alert(data.data.status)
                Swal.fire(data.data.status)
                getData();
            }
        )
    }

    React.useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            {/* <button onClick={() => getData()}>getData</button> */}
            {data.length > 0 ? <Table data={data} onEdit={onEdit} onDelete={onDelete}></Table> : 'loading...'}
        </div>

    );
}
export default Comments;
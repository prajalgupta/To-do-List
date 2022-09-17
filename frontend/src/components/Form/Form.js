import React from "react";
import {classes} from './Form.css'

const Form = (props) => {
    // const [items, setItems] = useState(null);
    // useEffect(()=>
    // axios.get('http://localhost:3000/api/v1'))
    return(
        <div className={classes.Form}>
            <h1>Task Manager</h1>
            <input/>
            <button>Submit</button>
        </div>
    )
}


export default Form;
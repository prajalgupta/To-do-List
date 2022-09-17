import React from "react";
import classes from './Form.module.css'; 

const Form = (props) => {
    // const [items, setItems] = useState(null);
    // useEffect(()=>
    // axios.get('http://localhost:3000/api/v1'))
    return(
        <div className={classes.Form}>
            <h1>Task Manager</h1>
            <div>
                <input type = "text" placeholder="e.g. wash dishes"/>
                <button className ={classes.button}>Submit</button>
            </div>
            
        </div>
    )
}


export default Form;
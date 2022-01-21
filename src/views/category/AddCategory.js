import React from 'react'
import { useHistory } from "react-router-dom";

export default function AddCategory() {
    let history = useHistory();
    return (
        <div>
            <h3>Add Category</h3>
            <button onClick={()=> history.goBack() }>Cancel</button>
        </div>
    )
}

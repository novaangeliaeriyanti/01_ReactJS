import React, { useState, useEffect } from 'react'
import apiCategory from '../../api/apiCategory'
import { useHistory } from "react-router-dom";

export default function Categories() {
    let history = useHistory();
    const [categories, setCategories] = useState([]);

    // phase componentDidMount, hanya di excute satu kali
    useEffect(() => {
        apiCategory.list().then(data =>{
            setCategories(data)
        })
    }, [])

    return (
        <div>
            <h2>List Of Category</h2>
            <button onClick={()=> history.push("/category/new")}>Add Category</button>
            <button onClick={()=> history.push("/")}>Back</button>
            <table>
                <thead>
                    Category Name
                </thead>
                <tbody>
                    {
                        categories && categories.map(cate => (
                            <tr>
                                <td>{cate.cate_id}</td>
                                <td>{cate.cate_name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

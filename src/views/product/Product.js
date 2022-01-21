import React, { useState, useEffect } from 'react'
import apiProduct from '../../api/apiProduct'
import { useHistory } from "react-router-dom";

export default function Product() {
    let history = useHistory();
    const [products, setProducts] = useState([]);

    // phase componentDidMount, hanya di excute satu kali
    useEffect(() => {
        apiProduct.listProduct().then(data =>{
            setProducts(data)
        })
    }, [])

    return (
        <div>
            <h2>List Of Products</h2>
            {/* <button onClick={()=> history.push("/category/new")}>Add Product</button> */}
            <button onClick={()=> history.push("/")}>Back</button>
            <table>
                <thead>
                    Product Name
                </thead>
                <tbody>
                    {
                        products && products.map(prod => (
                            <tr>
                                <td>{prod.prod_id}</td>
                                <td>{prod.prod_name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

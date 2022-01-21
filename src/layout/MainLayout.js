import React from 'react'
import { Link } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div>
            <ul>
                <Link to="/category">Category</Link>
            </ul>
            <ul>
                <Link to="/product">Product</Link>
            </ul>
        </div>
    )
}

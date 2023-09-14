import React from 'react';
import './styles.css'; 

function ProductList({ products, deleteProduct }) {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <span>Id: {product.id}</span>
                        <span>Name: {product.name}</span>
                        <span>Price: {product.price}</span>
                        <span>Category: {product.category}</span>
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;

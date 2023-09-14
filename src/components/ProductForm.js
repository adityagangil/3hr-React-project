import React, { useState } from 'react';
import './styles.css'; 

function ProductForm({ addProduct }) {
    const [productId, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: productId,
            name: productName,
            price: sellingPrice,
            category: category,
        };
        addProduct(product);
        setProductId('');
        setProductName('');
        setSellingPrice('');
        setCategory('');
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product ID"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Selling Price"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(e.target.value)}
                    required
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Choose Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Food">Food</option>
                    <option value="Skincare">Skincare</option>
                    {/* Add more categories as needed */}
                </select>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default ProductForm;

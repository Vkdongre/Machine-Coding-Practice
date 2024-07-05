import { useState, useEffect } from 'react';
import '../css/product.css';
import { useEkartCtx } from '../../context/EkartCtx';
import { showSuccessMessage } from '../utils/notification';

const Products = () => {
    const { cartItems, setCartItems } = useEkartCtx();
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        showSuccessMessage(`${product.title} added to cart successfully`);
    };
    return (
        <div>
            <div className="container product-grid">
                {products &&
                    products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.title} />
                            <div
                                className="product-info"
                                style={{ color: 'white' }}
                            >
                                <h3 className="product-title">
                                    {product.title}
                                </h3>
                                <p className="product-price">
                                    Price: ${product.price}
                                </p>
                                <p className="product-rating">
                                    Rating: {product.rating.rate}
                                </p>
                                <button onClick={() => addToCart(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Products;

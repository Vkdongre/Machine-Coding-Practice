import { useState } from 'react';
import { useEkartCtx } from '../../context/EkartCtx';
import CartDetails from './CartDetails';

const Cart = () => {
    const { cartItems } = useEkartCtx();
    const [showCartDetails, setShowCartDetails] = useState(false);

    const handleCart = () => {
        setShowCartDetails(true);
    };

    const handleCloseModal = () => {
        setShowCartDetails(false);
    };

    return (
        <div>
            <button
                type="button"
                className="btn btn-primary position-relative float-end"
                onClick={handleCart}
            >
                Cart
                {cartItems && cartItems?.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartItems.length}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                )}
            </button>
            {showCartDetails && (
                <CartDetails
                    showCartDetails={showCartDetails}
                    handleCloseModal={handleCloseModal}
                />
            )}
            <div
                className={`modal-backdrop fade ${
                    showCartDetails ? 'show' : ''
                }`}
                style={{ display: showCartDetails ? 'block' : 'none' }}
            ></div>
        </div>
    );
};

export default Cart;

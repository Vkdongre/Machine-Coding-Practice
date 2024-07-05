import { PropTypes } from 'prop-types';
import { useEkartCtx } from '../../context/EkartCtx';
import { showInfoMessage } from '../utils/notification';
const CartDetails = ({ showCartDetails, handleCloseModal }) => {
    const { cartItems, setCartItems } = useEkartCtx();

    const calculateTotalBill = () => {
        const totalBill = cartItems.reduce(
            (total, item) => total + item.price,
            0
        );
        return totalBill;
    };

    const removeFromCart = (id) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCartItems);
    };

    const handleBuyProduct = () => {
        showInfoMessage('We are working on it. You can buy products soon.');
    };

    return (
        <div>
            <div
                className={`modal ${showCartDetails ? 'show' : ''}`}
                style={{ display: showCartDetails ? 'block' : 'none' }}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-customization">
                            <h5 className="modal-title">Cart Items</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={handleCloseModal}
                            ></button>
                        </div>
                        <div className="modal-body cart-modal">
                            {cartItems.length ? (
                                cartItems.map((item) => (
                                    <div key={item.id} className="row">
                                        <div className="col-md-7">
                                            {item.title} - ${item.price}
                                        </div>
                                        <div className="col-md-3">
                                            Quantity: {1}
                                        </div>
                                        <div className="col-md-2 mx-0">
                                            <button
                                                className="btn btn-danger btn-sm mx-1"
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                            >
                                                X
                                            </button>
                                        </div>

                                        <hr />
                                    </div>
                                ))
                            ) : (
                                <div className="text-center">
                                    <i>Cart is Empty</i>
                                </div>
                            )}
                            <div
                                style={{
                                    position: 'sticky',
                                    bottom: '-20px',
                                    left: '10px',
                                    backgroundColor: 'white',
                                    padding: '10px',
                                    borderTop: '1px solid #ddd',
                                    boxShadow:
                                        '0px -2px 5px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <strong>
                                    Total Bill: ${calculateTotalBill()}
                                </strong>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleBuyProduct}
                            >
                                Buy
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleCloseModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
CartDetails.propTypes = {
    showCartDetails: PropTypes.bool,
    handleCloseModal: PropTypes.func,
};
export default CartDetails;

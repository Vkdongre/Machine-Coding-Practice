import { useState, createContext, useContext } from 'react';
import { PropTypes } from 'prop-types';
export const EkartContext = createContext(null);
export const EkartCtxProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [theme, setTheme] = useState('light');
    return (
        <EkartContext.Provider
            value={{ cartItems, setCartItems, theme, setTheme }}
        >
            {children}
        </EkartContext.Provider>
    );
};
EkartCtxProvider.propTypes = {
    children: PropTypes.any,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEkartCtx = () => {
    const { cartItems, setCartItems, theme, setTheme } =
        useContext(EkartContext);
    return { cartItems, setCartItems, theme, setTheme };
};

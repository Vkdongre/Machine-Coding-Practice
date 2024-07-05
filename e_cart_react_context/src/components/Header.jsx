import { useEkartCtx } from '../../context/EkartCtx';
import { showInfoMessage } from '../utils/notification';
import Cart from './Cart';

const Header = () => {
    const { theme, setTheme } = useEkartCtx();

    const handleThemeChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        showInfoMessage(
            `Theme chnaged to ${theme === 'dark' ? 'light' : 'dark'}`,
            'top-right',
            theme === 'dark' ? 'light' : 'dark'
        );
    };

    return (
        <div>
            <nav
                className={`navbar navbar-${theme} bg-${theme} navbar-fixed-top`}
                style={{
                    position: 'fixed',
                    width: '-webkit-fill-available',
                    top: 0,
                }}
            >
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="#">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                value={'dark'}
                                onChange={handleThemeChange}
                                checked={theme === 'dark'}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckChecked"
                            ></label>
                        </div>
                    </a>
                    <div className="text-center flex-grow-1">
                        <h1
                            className={`text-center`}
                            style={{
                                color: `${
                                    theme === 'dark' ? 'white' : 'black'
                                }`,
                            }}
                        >
                            E-Kart
                        </h1>
                    </div>
                    <Cart />
                </div>
            </nav>
        </div>
    );
};

export default Header;

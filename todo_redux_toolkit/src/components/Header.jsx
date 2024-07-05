import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/ThemeSlice';
const Header = () => {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    const handleThemeChange = () => {
        dispatch(toggleTheme(theme));
    };

    return (
        <div>
            <nav className={`navbar`}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="#">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                value={theme}
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
                        {' '}
                        {/* Use flex-grow-1 to make it take remaining space */}
                        <h1
                            className={`text-center`}
                            style={{
                                color: `${
                                    theme === 'dark' ? 'white' : 'black'
                                }`,
                            }}
                        >
                            Add ToDos
                        </h1>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;

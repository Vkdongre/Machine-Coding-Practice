import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
        <App />
    </Provider>
);

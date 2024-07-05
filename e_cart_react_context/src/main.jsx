import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { EkartCtxProvider } from '../context/EkartCtx.jsx';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
    <EkartCtxProvider>
        <App />
        <ToastContainer />
    </EkartCtxProvider>
);

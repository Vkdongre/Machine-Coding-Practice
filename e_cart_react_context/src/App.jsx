import { useEkartCtx } from '../context/EkartCtx';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';

function App() {
    const { theme } = useEkartCtx();
    return (
        <>
            <div className={`dimensions bg-${theme}`}>
                <Header />
                <Products />
                <Footer />
            </div>
        </>
    );
}

export default App;

import './App.css';
import AddToDos from './components/AddToDos';
import Header from './components/Header';
import ToDos from './components/ToDos';
import { useSelector } from 'react-redux';

function App() {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <div data-theme={theme} className={`dimensions bg-${theme}`}>
            <Header />
            <AddToDos />
            <ToDos />
        </div>
    );
}

export default App;

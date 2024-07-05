import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../css/todos.css';
import { addTodo } from '../features/ToDoSlice';

const AddToDos = () => {
    const dispatch = useDispatch();
    const [toDoname, setTodoName] = useState('');

    const handleInputChange = (e) => {
        setTodoName(e.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (toDoname.trim() === '') {
            alert('Please enter a ToDo');
            setTodoName('');
            return;
        }
        dispatch(addTodo({ name: toDoname, description: toDoname }));
        setTodoName('');
    };

    return (
        <div className="container main_container mt-4">
            <form onSubmit={handleFormSubmit} className="row g-3">
                <div className="col-md-10 col-8">
                    <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Add To Do"
                        value={toDoname}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-2 col-4">
                    <button className="btn btn-primary btn-lg" type="submit">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddToDos;

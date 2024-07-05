import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToDo, updateTodo } from '../features/ToDoSlice';
import UpdateTodo from './UpdateTodo';
const ToDos = () => {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    const handleRemove = (id) => {
        if (confirm('Are You Sure? Do you want to remove this ToDo ?')) {
            dispatch(removeToDo(id));
        } else {
            return;
        }
    };

    const handleUpdate = (id) => {
        // Find the selected todo by id
        const todoToUpdate = todos.find((todo) => todo.id === id);
        setSelectedTodo(todoToUpdate);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedTodo(null);
    };

    const handleUpdateTodo = (updatedTodo) => {
        dispatch(updateTodo(updatedTodo));
        handleCloseModal();
    };
    return (
        <div className="container mt-4" style={{ height: '200px' }}>
            <ul className="list-group">
                {todos.map((todo) => {
                    return (
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center"
                            key={todo.id}
                        >
                            <span>{todo.name}</span>
                            <div>
                                <button
                                    className="btn btn-success btn-sm mx-1"
                                    onClick={() => handleUpdate(todo.id)}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-danger btn-sm mx-1"
                                    onClick={() => handleRemove(todo.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            {selectedTodo && (
                <UpdateTodo
                    showModal={showModal}
                    selectedTodo={selectedTodo}
                    handleCloseModal={handleCloseModal}
                    handleUpdateTodo={handleUpdateTodo}
                />
            )}
            <div
                className={`modal-backdrop fade ${showModal ? 'show' : ''}`}
                style={{ display: showModal ? 'block' : 'none' }}
            ></div>
        </div>
    );
};

export default ToDos;

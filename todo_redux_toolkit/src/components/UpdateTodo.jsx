import { useState } from 'react';
import { PropTypes } from 'prop-types';
const UpdateTodo = ({
    showModal,
    selectedTodo,
    handleCloseModal,
    handleUpdateTodo,
}) => {
    const [updatedTodo, setUpdatedToDo] = useState(selectedTodo);

    const handleChange = (e) => {
        setUpdatedToDo({ ...selectedTodo, name: e.target.value });
    };

    return (
        <div>
            <div
                className={`modal ${showModal ? 'show' : ''}`}
                style={{ display: showModal ? 'block' : 'none' }}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-customization">
                            <h5 className="modal-title">Update Todo</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={handleCloseModal}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={selectedTodo.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleCloseModal}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary todo-update-btn-custom"
                                onClick={() => handleUpdateTodo(updatedTodo)}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

UpdateTodo.propTypes = {
    showModal: PropTypes.bool,
    selectedTodo: PropTypes.object,
    handleCloseModal: PropTypes.func,
    handleUpdateTodo: PropTypes.func,
};
export default UpdateTodo;

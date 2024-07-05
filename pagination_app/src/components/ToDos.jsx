import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ToDos = () => {
    const [todos, setToDos] = useState([]);
    const [perPage, setPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios
            // .get('https://jsonplaceholder.typicode.com/todos')
            .get('https://reqres.in/api/users')
            .then((response) => {
                setToDos(response.data.data);
                setCurrentPage(1); 
            })
            .catch((error) => console.log(error));
    }, [perPage]);

    const pages = Math.ceil(todos.length / perPage);

    const indexOfLastRecord = currentPage * perPage;
    const indexOfFirstRecord = indexOfLastRecord - perPage;

    const currentTodos = todos.slice(indexOfFirstRecord, indexOfLastRecord);

    const handlePerPage = (e) => {
        setPerPage(parseInt(e.target.value));
    };

    const handlePageClick = (e) => {
        setCurrentPage(parseInt(e.target.value));
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < pages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='container'>
            <div style={{ marginLeft: '1rem', marginTop:'2rem' }}>
                <label htmlFor="per_page_selection" className='me-1'>Todos per page </label>
                <select
                    name="todos_per_page"
                    id="per_page_selection"
                    onChange={handlePerPage}
                    value={perPage}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    {/* <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="50">50</option> */}
                </select>
            </div>
            <ul>
                {currentTodos.map((todo) => (
                    // <li key={todo.id}>{todo.title}</li>
                    <img style={{margin:'0.5rem'}} key={todo.id} src={todo.avatar} alt='No Preview'/>
                ))}
            </ul>
            <div style={{ marginLeft: '1rem', padding: '0.5rem' }}>
                <button
                    style={{ marginLeft: '0.5rem', padding: '0.5rem' }}
                    onClick={handlePrevClick}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                {Array.from({ length: pages }).map((_, i) => (
                    <button
                        style={{ marginLeft: '0.5rem', padding: '0.5rem' }}
                        value={i + 1}
                        key={i + 1}
                        className={`${i + 1 === currentPage ? 'active' : ''}`}
                        onClick={handlePageClick}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    style={{ marginLeft: '0.5rem', padding: '0.5rem' }}
                    onClick={handleNextClick}
                    disabled={currentPage === pages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ToDos;

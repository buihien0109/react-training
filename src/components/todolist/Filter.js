import React from 'react';

function Filter({ onFilterTodo }) {
    return (
        <div className="todo-option">
            <div className="todo-option-item">
                <input
                    type="radio"
                    name="todo-option-item"
                    id="all"
                    defaultChecked
                    onClick={() => onFilterTodo(1)}
                />
                <label htmlFor="all">All</label>
            </div>
            <div className="todo-option-item">
                <input
                    type="radio"
                    name="todo-option-item"
                    id="unactive"
                    onClick={() => onFilterTodo(2)}
                />
                <label htmlFor="unactive">Chưa hoàn thành</label>
            </div>
            <div className="todo-option-item">
                <input
                    type="radio"
                    name="todo-option-item"
                    id="active"
                    onClick={() => onFilterTodo(3)}
                />
                <label htmlFor="active">Hoàn thành</label>
            </div>
        </div>
    );
}

export default Filter;

import React from 'react';

function InputTodo({ title, getTitleTodo, onAddTodo }) {
    return (
        <div className="todo-input">
            <input
                type="text"
                placeholder="Nhập công việc"
                id="todo-input"
                defaultValue={title}
                onChange={(e) => {
                    getTitleTodo(e.target.value);
                }}
            />
            <button id="btn-add" onClick={() => onAddTodo()}>
                Thêm
            </button>
        </div>
    );
}

export default InputTodo;

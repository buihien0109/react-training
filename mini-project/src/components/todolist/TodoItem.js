import React from 'react';

function TodoItem({
    id,
    title,
    status,
    onDeleteTodo,
    onUpdateTodo,
    onToggleTodo,
}) {
    return (
        <div className={status ? 'todo-item active-todo' : 'todo-item'}>
            <div className="todo-item-title">
                <input
                    type="checkbox"
                    defaultChecked={status ? true : false}
                    onClick={() => onToggleTodo(id)}
                />
                <p>{title}</p>
            </div>
            <div className="option">
                <button
                    className="btn btn-update"
                    onClick={() => onUpdateTodo(id)}
                >
                    <span>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </span>
                </button>
                <button
                    className="btn btn-delete"
                    onClick={() => onDeleteTodo(id)}
                >
                    <span>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default TodoItem;

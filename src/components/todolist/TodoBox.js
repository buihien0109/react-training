import React from 'react';
import TodoItem from './TodoItem';

function TodoBox(props) {
    return (
        <div className="todo-main">
            <div className="todo-list">
                {props.todos.map(todo => {
                    return (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            status={todo.status}
                            onDeleteTodo={props.onDeleteTodo}
                            onToggleTodo={props.onToggleTodo}
                            onUpdateTodo={props.onUpdateTodo}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default TodoBox;

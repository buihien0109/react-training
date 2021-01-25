import React, { useState } from 'react';
import InputTodo from './InputTodo';
import Filter from './Filter';
import TodoBox from './TodoBox';
// import '../../assets/css/todo.css';

function createId() {
    let id = Math.floor(Math.random() * 100000);
    return id;
}

let todosData = [
    {
        id: createId(),
        title: 'Làm bài tập',
        status: true,
    },
    {
        id: createId(),
        title: 'Chơi với bạn bè',
        status: false,
    },
    {
        id: createId(),
        title: 'Sang nhà chị thăm người ốm',
        status: true,
    },
];

function TodoList() {
    const [todos, setTodos] = useState(todosData);
    const [title, setTitle] = useState('');
    const [update, setUpdate] = useState({ id: null, status: false });

    const getTitleTodo = (data) => {
        setTitle(data);
    };

    const onAddTodo = () => {
        if (title === '') {
            alert('Enter title todos ...');
            return;
        }
        let newTodo = {
            id: createId(),
            title: title,
            status: false,
        };
        setTodos([...todos, newTodo]);
        setTitle('');
    };

    const onFilterTodo = (data) => {
        let newTodos = [];
        switch (data) {
            case 1:
                newTodos = [...todos];
                break;
            case 2:
                newTodos = todos.filter((todo) => todo.status === false);
                break;
            case 3:
                newTodos = todos.filter((todo) => todo.status === true);
                break;
            default:
                newTodos = [...todos];
                break;
        }
        setTodos(newTodos);
    };

    const onDeleteTodo = (id) => {
        let newTodos = todos.filter((todo) => id !== todo.id);
        setTodos(newTodos);
    };

    const onToggleTodo = (id) => {
        let newTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.status = !todo.status;
            }
            return todo;
        });
        setTodos(newTodos);
    };
    
    const onUpdateTodo = (id) => {
        console.log(id);
    };

    return (
        <div className="todo-container">
            <h1 className="title-effect">Todo List</h1>
            <InputTodo
                title={title}
                getTitleTodo={getTitleTodo}
                onAddTodo={onAddTodo}
            />
            <Filter onFilterTodo={onFilterTodo} />
            <TodoBox
                todos={todos}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
                onUpdateTodo={onUpdateTodo}
            />
        </div>
    );
}

export default TodoList;

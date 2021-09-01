import PropTypes from 'prop-types';
import React from 'react';
TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
    todos: [],
    onTodoClick: null
}

function TodoList(props) {
    const { todos, onTodoClick } = props;
    const handleClick = todo => {
        if (onTodoClick) {
            onTodoClick(todo)
        }
    }
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => handleClick(todo)}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
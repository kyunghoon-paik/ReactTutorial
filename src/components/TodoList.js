import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

// const TodoList = ({todos, onTodoClick}) => (
//     <ul>
//         {todos.map((todo, index) => (
//             <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
//         ))}
//     </ul>
// )

const TodoList = ({ todos, toggleTodo, listId}) => (
    <ul>
        {todos.map(todo => (
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id, listId)}
            />
        ))}
    </ul>
)

//유효성 검사기(타입 확인 기능)
//성능상의 이유로, 개발모드에서만 확인이 됨
TodoList.propTypes = {
    todos: PropTypes.arrayOf (
        PropTypes.shape({
            id: PropTypes.number.isRequired,//isRequired : prop가 제공되지 않으면 경고창
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList
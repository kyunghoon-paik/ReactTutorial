import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'
//import {getVisibleTodos} from '../selectors/index'
import makeGetVisibleTodos from '../selectors/todoSelectors'

//mapStateToProps가 이 함수를 호출하여, todos를 계산하기 때문에, 성능 저하
//따라서 memoized selector가 필요함(변화가 일어나지 않는 경우, 계산하지 않기 위해)
//selector는, inputselector를 배열로 받아, 함수로 조짐
// const getVisibleTodos = (todos, filter) => {
//     switch (filter) {
//         case 'SHOW_ALL':
//             return todos
//         case 'SHOW_COMPLETED':
//             return todos.filter(t=>t.completed)
//         case 'SHOW_ACTIVE':
//             return todos.filter(t=>!t.completed)
//         default:
//             return
//     }
// }

//redux store의 상태를 조회해서, 어떤 것을 props로 넣어줄지 정한다.
//현재 redux의 상태를 파라미터(state)로 받아온다.
// const mapStateToProps = (state, props) => {
//     return {
//         // todos: getVisibleTodos(state.todos, state.visibleFilter)
//         todos: getVisibleTodos(state, props)
//     }
// }

//여러개의 State를 만들기 위함
const makeMapStateToProps = () => {
    const getVisibleTodos = makeGetVisibleTodos()
    const mapStateToProps = (state, props) => {
        return {
            todos: getVisibleTodos(state, props)
        }
    }
    return mapStateToProps
}

//액션을 디스패치하는 함수를 만들어서, props로 넣어준다.
//dispatch를 파라미터로 받아온다.
const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

//Redux와 연결될 State와 그에 해당하는 Dispatch함수를 묶어, 
//TodoList를 고차 컴포넌트화 한 것이 바로 VisibleTodoList
const VisibleTodoList = connect(makeMapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
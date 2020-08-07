import {combineReducers} from 'redux'
import todoLists from './todoLists'

const todoApp = combineReducers({
    todoLists
})
export default todoApp

// export default combineReducers({
//     todoLists
// })
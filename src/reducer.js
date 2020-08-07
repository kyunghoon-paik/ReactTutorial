import {combineReducers} from 'redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBLITY_FILTER,
    VisibleFilter
} from './actions'
import undoable, {distinctState} from 'redux-undo'

const {SHOW_ALL} = VisibleFilter;

function visibleFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBLITY_FILTER:
            return action.filter
    default:
        return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

const  undoableTodos = undoable(todos, {
    filter: distinctState()
})

const todoApp = combineReducers ({
    visibleFilter, 
    todos
})

export default todoApp
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBLITY_FILTER = 'SET_VISIBLITY_FILTER'

let nextTodoId = 0

export const VisibleFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text, listId) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text,
        listId
    }
}

export function toggleTodo(index, listId) {
    return {
        type: TOGGLE_TODO,
        index,
        listId
    }
}

export function setVisibleFilter(filter, listId) {
    return {
        type: SET_VISIBLITY_FILTER,
        filter,
        listId
    }
}

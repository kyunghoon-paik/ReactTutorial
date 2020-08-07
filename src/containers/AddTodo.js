import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

let AddTodo = ({dispatch}) => {
    let input

    return (
        <div>
            <form
                onSubmit={e=> {
                    e.preventDefault()
                    console.log(input.value)
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value=''
                }}
            >
                <input
                //input이 찐 '입력'했을 때!
                    ref={node => {
                        input = node//여기가 오타여서, 'Node"로.. 아무 input이 들어오지 않음
                    }}
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo
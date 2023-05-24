import React, { useReducer } from 'react'

type CounterState = {
    count: number
}

type CounnterAction = {
    type: string
    payload: number
}

const initialState = {
    count: 0
}

function reducer(state: CounterState , action:CounnterAction) {
    switch (action.type) {
        case 'increment' :
            return {
                count: state.count + action.payload
            }
        case 'decrement' :
            return {
                count: state.count - action.payload
            }
        default:
            return state
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer , initialState) ;

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' , payload: 10 })}>
        Increment 10
        </button>

        <button onClick={() => dispatch({ type: 'decrement' , payload: 5 })}>
        Increment 5
        </button>

    </div>
  )
}

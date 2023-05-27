import React, { useReducer } from 'react'

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}


type CounnterAction = UpdateAction | ResetAction



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
            case 'reset' :
                return initialState   
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

        <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
        </button>

    </div>
  )
}

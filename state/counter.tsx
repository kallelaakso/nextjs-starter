import { useReducer, useContext, createContext } from 'react'

interface CounterState {
  counter: number
}

const defaultState = {
  counter: 1,
}

const CounterStateContext: any = createContext(null)
const CounterDispatchContext: any = createContext(null)

const reducer = (
  state: CounterState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, counter: state.counter + 1 }
    case 'DECREASE':
      return { ...state, counter: state.counter - 1 }
    case 'INCREASE_BY':
      return { ...state, counter: state.counter + action.payload }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const CounterProvider = ({ children }: React.AllHTMLAttributes<any>) => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  return (
    <CounterDispatchContext.Provider value={dispatch}>
      <CounterStateContext.Provider value={state}>
        {children}
      </CounterStateContext.Provider>
    </CounterDispatchContext.Provider>
  )
}

export const useCount: any = () => useContext(CounterStateContext)
export const useDispatchCount: any = () => useContext(CounterDispatchContext)

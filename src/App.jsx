import { useReducer } from 'react'
import Chess from './Chess/Chess'
import { context } from './Contexts/Context'
import { reducer } from './Reducer/reducer'
import { chessBoardState } from './constant'
import './App.css'

function App() {
  const [chessState, dispach] = useReducer(reducer, chessBoardState)


  return (
    <div className="App">
      <context.Provider value={{chessState, dispach}}>
        <Chess />
      </context.Provider>
    </div>
  )
}

export default App

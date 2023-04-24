import { useReducer } from 'react'
import Chess from './Chess/Chess'
import context from './Context/Context'
import { reducer } from './Reducer/reducer'
import './App.css'

function App() {
  const [chessState, dispach] = useReducer(reducer, )

  return (
    <div className="App">
      <context.Provider value={{}}>
        <Chess />
      </context.Provider>
    </div>
  )
}

export default App

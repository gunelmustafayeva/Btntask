import { useState } from 'react'
import './App.css'
import Click from './Click/Click'

function App() {
  const [state, setState] = useState(false)

  return (
    <>
      <Click state={state} setState={setState}/>
      {state&&"Subscribed"}
    </>
  )
}

export default App

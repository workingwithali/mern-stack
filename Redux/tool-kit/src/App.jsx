import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Nav />
    <div>
      <button onClick={()=>dispatch(decrement())} >-</button>
      currtly counter change {count}
      <button onClick={()=>dispatch(increment())}>+</button>
    </div>
      
    </>
  )
}

export default App

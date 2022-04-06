import {useState}  from 'react'
import Header from './component/Header'
import './App.css'
function App() {
  const [count,setCount]=useState(0)
  const addCount=()=>{
    setCount(count+1)
  }
  return (
    <div>
    
      
      <button onClick={addCount}>ADD</button>
      <p>Counter {count} </p>
      
    </div>
  );
}

export default App;



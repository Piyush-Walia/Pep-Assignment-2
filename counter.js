import React,{useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
   const handleIncrement=()=>{
        setCount(count + 1)
    }
    const handleDecrement=()=>{
        setCount(count - 1)

    }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}} >
      <div >
        <h1 className='text-center fs-20'>Count</h1>
        <h2 className='text-center fs-5' style={{fontSize:"70px"}}>{count}</h2>
        <div className='d-flex'>
        <button type="button"  onClick={handleIncrement} class="btn btn-success me-3">Increment</button>
        <button type="button" onClick={handleDecrement} class="btn btn-danger ms-3">Decrement</button>
        </div>
        <p className='text my-2'style={{fontSize:"15px"}}>Done by:- Anish 12017020</p>
      </div>
    </div>
  )
}

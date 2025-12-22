import React from 'react'
import './style.css'
const useState = () => {
    const initialData = 15;
    const [myNum, setMyNum] = React.useState(initialData);
    console.log(myNum);
  return (
    <>
    <p>{myNum}</p>
    <div className="center_div">
        
        <div className="button2" onClick={() => setMyNum(myNum + 1) } >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>

        <div className="button2" onClick={() => myNum> 0 ? setMyNum(myNum - 1): setMyNum(0) } >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
    </div>
    </>
  )
}

export default useState

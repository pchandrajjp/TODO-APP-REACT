import React, { useState, useEffect }from 'react'
import './style.css'
const UseEffect = () => {
    // const initialData = 15;
    const [myNum, setMyNum] = React.useState(0);
    React.useEffect(() => {
        document.title = `Chats (${myNum})`
    });
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

        
    </div>
    </>
  )
}

export default UseEffect

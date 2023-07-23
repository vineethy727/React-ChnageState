import { useState } from "react";
const Incredecre=()=>{
    const [num,setNum]=useState(0);

    const Incre=()=>{
        setNum(num=>num+1);
    }
    const decre=()=>{
        setNum(num=>num-1);
    }
    return(
        <>
            <div>
                <h1>{num}</h1>
            </div>
            <div>
                <button onClick={Incre}>increment</button>
            </div>
            <div>
                <button onClick={decre}>increment</button>
            </div>
        </>
    )
};
export default Incredecre;
import { useState } from "react";

const Show=()=>{
    const [bool, setBool]=useState(false);

    const [show1, setShow1]=useState(`welcome`);
    const [hide, setHide]=useState(``);

    const showhide=()=>{
        setBool(bool=>!bool);
    }

    return(
        <>
            <div className="container mt-5">
                <button onClick={showhide} className={"btn btn-info"}>show/hide</button>
            </div>
            <div className="container mt-5">
           {
             bool?<h1 className="text text-dark">{show1}</h1>:<h1>{hide}</h1>
           }
            </div>
        </>
    )
};
export default Show;
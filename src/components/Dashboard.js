import { useState } from "react";
import Register from "./Register";
import Login from "./Login";


const Dashboard=()=>{

    const [bool, setBool]=useState(false);
    const [s1,setS1]=useState(`Registration  case`);
    const [s2,setS2]=useState(`Login case`);
    const showhide=()=>{
        setBool(bool=>!bool);
    }

    return(
        <>
        <div className="container mt-5">
                <button onClick={showhide} className={"btn btn-info"}>check</button>
            </div>
            <div className="container mt-5">
           {
             bool?<Register k1= {s1}></Register>:<Login k2={s2}></Login>
           }
            </div>
        
        </>
    )


};
export default Dashboard;
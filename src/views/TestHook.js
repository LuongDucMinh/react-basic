import React from "react";

import { useState } from "react";


let TestHook =()=>{
 const [testCount,settestCount]= useState(0);

const handleCount =()=>{
settestCount(testCount+1)

}

 return(
    <div>
    <h3>{testCount}</h3>
    <button onClick={handleCount}>Create</button>
    </div>
 )


}

export default TestHook
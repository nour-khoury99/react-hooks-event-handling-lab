// Code EyesOnMe Component Here

import React ,{useState}  from "react";



function EyesOnMe(){
    
    const [focus,blur] = useState(false)
     console.log({focus,blur})

     function HandleEvent(event){
        blur(!focus)
     }
    return(
        <div>
            <button onClick={HandleEvent}>{focus? "Good":"Hey, Eyes on Me!"}</button>
        </div>
    )
}
export default EyesOnMe;
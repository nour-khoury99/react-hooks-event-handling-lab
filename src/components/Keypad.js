// Code Keypad Component Here

function Keypad (){


    function Handler(){
        console.log('Entering password...');

    }
    return (
        <div>
            <input type="button" onClick={Handler}/>
        </div>
    )
}

export default Keypad;
function handleClick(event){
    console.log("Hello")
    console.log(event)
}
function handleMouseOver(){
    console.log("Bye")
}
function handleDblClick(){
    console.log("You clicked twice")
}

export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>
                Click Me!
            </button>
            <p onMouseOver={handleMouseOver}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, aliquid! Ea ab deserunt dolores at quibusdam odit suscipit asperiores facere accusamus! Praesentium itaque amet corporis, magnam sunt libero accusantium corrupti.This para is for event demo</p>
        <button onDoubleClick={handleDblClick}>
            Click me updated
        </button>
        </div>
    )
}
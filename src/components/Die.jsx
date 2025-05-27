export default function Die(props) {
    return (
         <button  
            className={`btn-die ${props.gameWon ? "btn-die_accent" : "btn-die"}`}>
                {props.value}
        </button>
    )
}
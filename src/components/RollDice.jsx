export default function RollDice(props) {
    return (
        <button 
            className='btn-roll btn-roll_style'
            onClick={props.onClick}>
                {props.gameWon? "New Game" : "Roll Dice"}
        </button>
    )
}
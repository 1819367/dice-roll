export default function RollDice(props) {
    return (
        <button 
            className='btn-roll btn-roll_style'
            onClick={props.onClick}>
                Roll Dice
        </button>
    )
}
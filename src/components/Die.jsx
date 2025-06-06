import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Die(props) {
    //array of icon names
    const diceIconNames = [
        null, //index - unused, dice values are 1-6
        'dice-one',
        'dice-two',
        'dice-three',
        'dice-four',
        'dice-five',
        'dice-six'
    ];
    const iconName = diceIconNames[props.value]; //map dice values (1-6) to icon names

    return (
         <button  
            aria-label={`Die with a value of ${props.value}`}
            className={`btn-die ${props.gameWon ? "btn-die_accent" : ""} 
                    ${props.isShaking ? "shake" : ""}`}>
                 <FontAwesomeIcon icon={['fa-solid', iconName]} size="10x"/>
        </button>
    )
}
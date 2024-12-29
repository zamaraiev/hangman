import styles from './keyboard.module.scss'


const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    disabled?: boolean,
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void
}

function Keyboard({disabled, activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps){
    return (<div className='keyboard'>

        {KEYS.map(key => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return(
            <button 
            onClick={() => addGuessedLetter(key)}
            key={key} 
            className={`${styles.btn} ${
                isActive ? styles.active : ""
            } 
            ${
                isInactive ? styles.inactive : ""
            }`}
            disabled = {isActive || isInactive || disabled }
            >

                {key}
            </button>
        )
            
        })}

    </div>)
}

export default Keyboard
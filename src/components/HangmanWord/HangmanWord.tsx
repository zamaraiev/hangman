import './hangmanWord.scss'

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}

function HangmanWord({guessedLetters, wordToGuess}: HangmanWordProps){


    return( <div className='hangmanWord'>

        {wordToGuess.split('').map((letter, index) => (
            <span className='letter' key={index}>
                <span style={{visibility: guessedLetters.includes(letter) 
                    ? 'visible' 
                    : 'hidden',}}>
                    {letter}
                </span>
            </span>
        ))}

    </div>)
}

export default HangmanWord
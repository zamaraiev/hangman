import { useCallback, useEffect, useState } from 'react'
import words from './wordList.json'

import HangmanDrawing from './components/HangmanDrawing/HangmanDrawing'
import HangmanWord from './components/HangmanWord/HangmanWord'
import Keyboard from './components/Keyboard/Keyboard'

import './components/game.scss'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  console.log(wordToGuess)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter)) return

    setGuessedLetters(curentLetters => [...curentLetters, letter])
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener('keypress', handler)

    return() => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  return(<div className='body'>
    <div style={{fontSize: "2rem" , textAlign: "center"}}>
      {isWinner && "Winner! - Refresh to try again"}
      {isLoser && "Loser! - Refresh to try again"}
    </div>
    <HangmanDrawing numberOfGuess={incorrectLetters.length}/>
    <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
    <Keyboard 
      disabled = {isWinner || isLoser}
      activeLetters={guessedLetters.filter(
        letter => wordToGuess.includes(letter)
      )}

      inactiveLetters={incorrectLetters}
      addGuessedLetter={addGuessedLetter}
    />
  </div>)
}

export default App

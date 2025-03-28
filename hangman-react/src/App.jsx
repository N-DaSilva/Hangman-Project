import { useState, useEffect } from 'react';

import { Hangman } from './components/hangman';
import { Keyboard } from './components/keyboard';
import { Word } from './components/word';
import { WrongLetters } from './components/wrong-letters';


function App() {
  const [word, setWord] = useState('');
  const [letters, setLetters] = useState([]);
  const [errors, setErrors] = useState(0);

  const regex = /[A-Z]/;

  useEffect(() => {
    if (letters.length > 0) {
      const lastLetter = letters[letters.length - 1];

      if (!word.toUpperCase().split("").slice(1).includes(lastLetter)) {
        setErrors((prevErrors) => prevErrors + 1);
      }
    }
  }, [letters, word]);



  if (errors === 6) {
    return (
      <main>
        <h1>Perdu !</h1>
        <Hangman errors={errors} />
        <p>Le mot était : {word}</p>
        <button onClick={() => window.location.reload()}>Réessayer</button>
      </main>
    )
  }

  if (word.toUpperCase().split("").slice(1).filter((letter)=>regex.exec(letter)).every((letter) => letters.includes(letter))&& letters.length > 0) {
    return (
      <main>
        <h1>Gagné !</h1>
        <Hangman errors={errors} />
        <p>Le mot était : {word}</p>
        <button onClick={() => window.location.reload()}>Rejouer</button>
      </main>
    )
  }

  
  return (
    <main>
      <h1>Jeu du pendu</h1>
      <p>Essayez de deviner le mot avant que le bonhomme ne soit pendu !</p>

      <Word word={word} setWord={setWord} letters={letters} errors={errors} setErrors={setErrors} />
      <div className='wrapper'>
        <WrongLetters word={word} letters={letters} />
        <Hangman word={word} errors={errors} letters={letters} />
      </div>
      <Keyboard letters={letters} setLetters={setLetters} />
    </main>
  )
}

export default App
import { useEffect } from 'react';
import { Letter } from './letter';

export const Word = ({ word, setWord, letters }) => {

    useEffect(() => {
        fetch('http://localhost:3333', { method : "POST", body: new URLSearchParams({ locale: "fr-FR" }) })
          .then(response => response.json())
          .then(data => setWord(data.word))
          .catch(error => console.error(error));
      }, []);

    return (
        <div className='word'>
            {word.toUpperCase().split("").map((letter, index) => (
                <Letter key={index} index={index} value={letter} isRevealed={letters.includes(letter)} />
            ))}
        </div>
    )
}
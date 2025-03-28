export const Keyboard = ({ letters, setLetters }) => {
    const handleClick = (e) => {
        setLetters([...letters, e.target.innerText]);
        e.target.disabled = true;
    }

    return (
        <div className="keyboard">
            <button onClick={handleClick}>A</button>
            <button onClick={handleClick}>B</button>
            <button onClick={handleClick}>C</button>
            <button onClick={handleClick}>D</button>
            <button onClick={handleClick}>E</button>
            <button onClick={handleClick}>F</button>
            <button onClick={handleClick}>G</button>
            <button onClick={handleClick}>H</button>
            <button onClick={handleClick}>I</button>
            <button onClick={handleClick}>J</button>
            <button onClick={handleClick}>K</button>
            <button onClick={handleClick}>L</button>
            <button onClick={handleClick}>M</button>
            <button onClick={handleClick}>N</button>
            <button onClick={handleClick}>O</button>
            <button onClick={handleClick}>P</button>
            <button onClick={handleClick}>Q</button>
            <button onClick={handleClick}>R</button>
            <button onClick={handleClick}>S</button>
            <button onClick={handleClick}>T</button>
            <button onClick={handleClick}>U</button>
            <button onClick={handleClick}>V</button>
            <button onClick={handleClick}>W</button>
            <button onClick={handleClick}>X</button>
            <button onClick={handleClick}>Y</button>
            <button onClick={handleClick}>Z</button>
        </div>
    )
}
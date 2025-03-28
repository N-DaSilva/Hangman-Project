export const WrongLetters = ({ word, letters }) => {
    return (
        <div className="wrong-letters">
            {letters.filter(letter => !word.toUpperCase().split("").slice(1).includes(letter)).map((letter, index) => (
                <span key={index} className="letter">{letter}</span>
            ))}
        </div>
    )
}
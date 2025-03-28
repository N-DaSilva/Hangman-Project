export const Letter = ({ index, value, isRevealed }) => {
    const regex = /[A-Z]/;
    
    return (
        <span>
            {regex.exec(value) ? index === 0 ? value : isRevealed ? value : '_' : value}
        </span>
    )
}
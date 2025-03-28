export const Hangman = ({ errors }) => {
    const hangmanStages = [
        `
        +---+
        |   |
            |
            |
            |
            |
      =========  
        `,
        `
        +---+
        |   |
        O   |
            |
            |
            |
      =========  
        `,
        `
        +---+
        |   |
        O   |
        |   |
            |
            |
      =========  
        `,
        `
        +---+
        |   |
        O   |
       /|   |
            |
            |
      =========  
        `,
        `
        +---+
        |   |
        O   |
       /|\\  |
            |
            |
      =========  
        `,
        `
        +---+
        |   |
        O   |
       /|\\  |
       /    |
            |
      =========  
        `,
        `
        +---+
        |   |
        O   |
       /|\\  |
       / \\  |
            |
      =========  
        `
      ];

    console.log(hangmanStages[errors]);

    return (
            <pre className="hangman">
                {hangmanStages[errors]}
            </pre>
    )
}
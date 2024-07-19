

const attackersChoice = () => {
    const cursedT = ["Straw Doll", "10 Shadows", "Cursed Speech", "Jaccobs Ladder", "Shrine", "Limitless", "Ratio", "Idle Transfiguration", "Boogie Woogie", "Blood Manipulation"];
    const randomAttack = Math.floor(Math.random() * cursedT.length);
    return cursedT[randomAttack];
}

const defendersChoice = () => {
    const cursedT = ["Straw Doll", "10 Shadows", "Cursed Speech", "Jaccobs Ladder", "Shrine", "Limitless", "Ratio", "Idle Transfiguration", "Boogie Woogie", "Blood Manipulation"];
    const randomAttack = Math.floor(Math.random() * cursedT.length);
    return cursedT[randomAttack];
}

const firstRound = (attackersMove, defendersMove) => {
    attackersMove = attackersMove.toUpperCase();
    defendersMove = defendersMove.toUpperCase();

    if (attackersMove === defendersMove) {
        return 'It\'s a draw! Let\'s regroup.';
    } else if (
        (defendersMove === "BLOOD MANIPULATION" && attackersMove === "STRAW DOLL") || 
        (defendersMove === "STRAW DOLL" && attackersMove === "BLOOD MANIPULATION") || 
        (attackersMove === "10 SHADOWS" && defendersMove === "CURSED SPEECH")
    ) {
        return `Great job ${defendersMove}! You beat ${attackersMove}!`;
    } else if (attackersMove === "LIMITLESS" || defendersMove === "LIMITLESS") {
        return `RUN, IT'S GOJO!`;
    } else {
        return `Shit, ${defendersMove} lost to ${attackersMove}. Fall back and regroup.`;
    }
}

// Example usage
const attackerMove = attackersChoice();
const defenderMove = defendersChoice();
console.log(firstRound(attackerMove, defenderMove))
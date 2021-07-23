
// Проверка победы
export const isWin = (player) => {
    for (let key in player) {
        if (player[key].length === 3 && key !== player.name && key !== player.score) {
            player.score = parseInt(player.score)+ 1
            console.log(player.steps)
            return {
                name: player.name,
                score: player.score,
                topX: [],
                middleX: [],
                bottomX: [],
                leftY: [],
                middleY: [],
                rightY: [],
                leftDiagonal: [],
                rightDiagonal: [],
                win: key,
            }
        }
    }
    return player
}
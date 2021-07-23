
// Проверка на невозможности победы
export const isNobody = (player)=>{
    if(player.topX.length === 2 &&
        player.middleX.length === 1 &&
        player.bottomX.length === 1 &&
        player.leftY.length === 2 &&
        player.middleY.length === 1 &&
        player.rightY.length === 1 &&
        player.leftDiagonal.length === 1 &&
        player.rightDiagonal.length === 1
    ){
        window.location.reload()
        alert('Не осталось победных ходов!')
    }

    if(player.topX.length === 2 &&
        player.middleX.length === 1 &&
        player.bottomX.length === 1 &&
        player.leftY.length === 1 &&
        player.middleY.length === 1 &&
        player.rightY.length === 2 &&
        player.leftDiagonal.length === 1 &&
        player.rightDiagonal.length === 1
    ){
        window.location.reload()
        alert('Не осталось победных ходов!')
    }

    if(player.topX.length === 1 &&
        player.middleX.length === 1 &&
        player.bottomX.length === 2 &&
        player.leftY.length === 2 &&
        player.middleY.length === 1 &&
        player.rightY.length === 1 &&
        player.leftDiagonal.length === 1 &&
        player.rightDiagonal.length === 1
    ){
        window.location.reload()
        alert('Не осталось победных ходов!')
    }

    if(player.topX.length === 1 &&
        player.middleX.length === 1 &&
        player.bottomX.length === 2 &&
        player.leftY.length === 1 &&
        player.middleY.length === 1 &&
        player.rightY.length === 2 &&
        player.leftDiagonal.length === 1 &&
        player.rightDiagonal.length === 1
    ){
        window.location.reload()
        alert('Не осталось победных ходов!')
    }

}
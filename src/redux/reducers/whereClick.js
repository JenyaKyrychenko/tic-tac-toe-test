
// Координаты клика
export const whereClick = (x, y, state) => {
    // X
    if (x === 0) {
        state.topX.push('x')
    }
    if (x === 1) {
        state.middleX.push('x');
    }
    if (x === 2) {
        state.bottomX.push('x');
    }
    // Y
    if (y === 0) {
        state.leftY.push('x');
    }
    if (y === 1) {
        state.middleY.push('x');
    }
    if (y === 2) {
        state.rightY.push('x');
    }
    if ((x === 0 && y === 0) || (x === 1 && y === 1) || (x === 2 && y === 2)) {
        state.leftDiagonal.push("x");
    }

    if ((x === 0 && y === 2) || (x === 1 && y === 1) || (x === 2 && y === 0)) {
        state.rightDiagonal.push("x");
    }
    return state
}
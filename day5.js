let day5part1 = async (input) => {
    let lines = parseInput(input)
    let rows = 0;
    let cols = 0;

    lines.forEach(line => {
        line.forEach(point => {
            cols = Math.max(cols, point[0]);
            rows = Math.max(rows, point[1]);
        });
    });

    let board = emptyBoard(rows + 1, cols + 1);

    lines.forEach(line => {
        let start = line[0];
        let end = line[1];
        if (start[0] == end[0]) { // vertical
            if(start[1] < end[1]) {
                for(let p = start[1]; p <= end[1]; p++) {
                    board[p][start[0]] += 1
                }
            } else {
                for(let p = start[1]; p >= end[1]; p--) {
                    board[p][start[0]] += 1
                }
            }
        } else if (start[1] == end[1]) { // horizontal
            if(start[0] < end[0]) {
                for(let p = start[0]; p <= end[0]; p++) {
                    board[start[1]][p] += 1
                }
            } else {
                for(let p = start[0]; p >= end[0]; p--) {
                    board[start[1]][p] += 1
                }
            }
        }
    })
    return countOverlaps(board)
}

let day5part2 = (input) => {
    let lines = parseInput(input)
    let rows = 0;
    let cols = 0;

    lines.forEach(line => {
        line.forEach(point => {
            cols = Math.max(cols, point[0]);
            rows = Math.max(rows, point[1]);
        });
    });

    let board = emptyBoard(rows + 1, cols + 1);

    lines.forEach(line => {
        let start = line[0];
        let end = line[1];
        if (start[0] == end[0]) { // vertical
            if(start[1] < end[1]) {
                for(let p = start[1]; p <= end[1]; p++) {
                    board[p][start[0]] += 1
                }
            } else {
                for(let p = start[1]; p >= end[1]; p--) {
                    board[p][start[0]] += 1
                }
            }
        } else if (start[1] == end[1]) { // horizontal
            if(start[0] < end[0]) {
                for(let p = start[0]; p <= end[0]; p++) {
                    board[start[1]][p] += 1
                }
            } else {
                for(let p = start[0]; p >= end[0]; p--) {
                    board[start[1]][p] += 1
                }
            }
        } else { // diagonal
            if(start[0] < end[0]) { // start on left
                if(start[1] < end[1]) { // go down
                    for(let p = start[0]; p <= end[0]; p++) {
                        for(let k = start[1]; k <= end[1]; k++) {
                            board[k][p++] += 1
                        }
                    }
                } 
                else { // go up
                    for(let p = start[0]; p <= end[0]; p++) {
                        for(let k = start[1]; k >= end[1]; k--) {
                            board[k][p++] += 1
                        }
                    }
                }
            } 
            else { // start on right
                if(start[1] < end[1]) { // go down
                    for(let p = start[0]; p >= end[0]; p--) {
                        for(let k = start[1]; k <= end[1]; k++) {
                            board[k][p--] += 1
                        }
                    }
                } else { // go up
                    for(let p = start[0]; p >= end[0]; p--) {
                        for(let k = start[1]; k >= end[1]; k--) {
                            board[k][p--] += 1
                        }
                    }
                }
            }
        }
    })
    return countOverlaps(board)
}

let parseInput = (input) => {
    return input.map(line => {
        return line.split(" -> ").map(point => {
            return point.split(',').map(coord => {
                return parseInt(coord)
            });
        });
    })
    .filter(l => l.length == 2);
}

let emptyBoard = (rows, cols) => {
    let board = []
    for(let i = 0; i < rows; i++){
        board[i] = []
        for(let j = 0; j < cols; j++){
            board[i][j] = 0;
        }
    }
    return board;
}

let countOverlaps = (board) => {
    let overlaps = 0;
    for(let r = 0; r < board.length; r++){
        for(let c = 0; c < board[0].length; c++){
            if(board[r][c] > 1){
                overlaps++;
            }
        }
    }
    return overlaps
}

export {day5part1, day5part2}
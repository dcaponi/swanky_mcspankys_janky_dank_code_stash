let day4part1 = async (input) => {
    let numbers = input[0].split(',').map(n => parseInt(n));
    let boards = input.slice(1, input.length)
        .filter(b => b != '')
        .map(r => r.split(" ").filter(n => n != "").map(i => parseInt(i)))
        .map((r, i, n) => { if(i % 5 == 0) { return n.slice(i, i + 5) } })
        .filter(n => n);

    let winBoard;
    let winNumber = null;

    for(let i = 0; i < numbers.length; i++){
        boards = boards.map(b => {
            let marked = b.map(r => r.map(c => c == numbers[i] ? -1 : c))
            let rw = marked.map(r => r.reduce((a, i) => a + i)).filter(n => n == -5).length > 0
            let cw = transpose(marked).map(r => r.reduce((a, i) => a + i)).filter(n => n == -5).length > 0
            if ((rw || cw) && !winBoard){
                winBoard = marked;
            }
            return marked;
        })

        if(winBoard){
            winNumber = numbers[i]
            break
        }
    }
    return score(winBoard, winNumber)
    
}

let transpose = (mat) => {
    let out = []
    for(let c = 0; c < mat[0].length; c++){
        out.push([]);
        for(let r = 0; r < mat.length; r++){
            out[c].push(mat[r][c])
        }
    }
    return out
}

let score = (board, mult) => {
    let score = 0;
    for(let r = 0; r < board.length; r++){
        for(let c = 0; c < board.length; c++){
            score += board[r][c] > 0 ? board[r][c] : 0
        }
    }
    return score * mult
}

let day4part2 = (input) => {
    let numbers = input[0].split(',').map(n => parseInt(n));
    let boards = input.slice(1, input.length)
        .filter(b => b != '')
        .map(r => r.split(" ").filter(n => n != "").map(i => parseInt(i)))
        .map((r, i, n) => { if(i % 5 == 0) { return n.slice(i, i + 5) } })
        .filter(n => n);
    
    let winNumber = 0;
    let winBoards = [];
    for(let i = 0; i < numbers.length; i++){
        boards = boards.map(b => {
            let marked = b.map(r => r.map(c => c == numbers[i] ? -1 : c))
            let rw = marked.map(r => r.reduce((a, i) => a + i)).filter(n => n == -5).length > 0
            let cw = transpose(marked).map(r => r.reduce((a, i) => a + i)).filter(n => n == -5).length > 0
            if (rw || cw){
                winBoards.push(marked)
                return null
            }
            return marked;
        }).filter(b => b)
        
        if (boards.length == 0){
            winNumber = numbers[i]
            break
        }
    }
    return score(winBoards[winBoards.length-1], winNumber)
}

export {day4part1, day4part2}
let day7part1 = async (input) => {
    let initialPos = input[0].split(',').map(i => parseInt(i)).sort((a,b) =>a-b)
    let plans = []
    for(let i = 0; i < initialPos[initialPos.length-1]; i++){
        let fuel = 0
        for(let j = 0; j < initialPos.length; j++){
            fuel += Math.abs(initialPos[j] - i)
        }
        plans.push(fuel)
    }
    let min = plans[0]
    for(let i = 0; i < plans.length; i++){
        if (plans[i] < min){
            min = plans[i]
        }
    }
    return min
}

let day7part2 = (input) => {
    let initialPos = input[0].split(',').map(i => parseInt(i)).sort((a,b) =>a-b)
    let plans = []
    for(let i = 0; i < initialPos[initialPos.length-1]; i++){
        let fuel = 0
        for(let j = 0; j < initialPos.length; j++){
            let dist = Math.abs(initialPos[j] - i)
            fuel += dist
            dist--
            while(dist > 0){
                fuel += dist
                dist--
            }
        }
        plans.push(fuel)
    }
    let min = plans[0]
    for(let i = 0; i < plans.length; i++){
        if (plans[i] < min){
            min = plans[i]
        }
    }
    return min
}

export {day7part1, day7part2}
let day6part1 = async (input) => {
    let days = 80
    let fish = input[0].split(',').map(f => parseInt(f)).sort()
    return lifeCycle(fish, days)
}

let day6part2 = (input) => {
    let days = 256
    let fish = input[0].split(',').map(f => parseInt(f)).sort()
    return lifeCycle(fish, days)
}

let lifeCycle = (fish, days) => {
    let gens = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    for(let i = 1; i <= fish[fish.length-1]; i++){
        gens[i] = fish.filter(f => f == i).length;
    }

    for(let i = 0; i < days; i++){
        let spawns = gens[0]
        for(let j = 0; j < gens.length - 1; j++){
            gens[j] = gens[j+1]
        }
        gens[6] += spawns
        gens[8] = spawns
    }
    return gens.reduce((acc, n) => acc + n);
}

export {day6part1, day6part2}
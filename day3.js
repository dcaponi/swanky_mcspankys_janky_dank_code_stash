let day3part1 = async (input) => {
    let gamma0b = []
    let epsilon0b = []

    for(let i = 0; i < input[0].length; i++) {
        let ones = input.map(n => (parseInt(n, 2) >> i) & 1).filter(t => t).length
        if( ones > input.length / 2 ) {
            gamma0b[input[0].length - 1 - i] = 1
            epsilon0b[input[0].length - 1 - i] = 0
        } else {
            gamma0b[input[0].length - 1 - i] = 0
            epsilon0b[input[0].length - 1 - i] = 1
        }
    }
    let gamma = parseInt(gamma0b.join(""), 2)
    let epsilon = parseInt(epsilon0b.join(""), 2)

    return gamma * epsilon
}

let day3part2 = (input) => {
    let ox = parseInt(o2(input, 0), 2)
    let co = parseInt(co2(input, 0), 2)
    return ox * co
}

let o2 = (list, i) => {
    if(list.length == 1) {
        return list[0]
    }
    let ones = list.filter(t => t[i] == "1")
    let zeros = list.filter(t => t[i] == "0")

    if(ones.length >= list.length / 2) {
        return o2(ones, i + 1)
    } else {
        return o2(zeros, i + 1)
    }
}

let co2 = (list, i) => {
    if(list.length == 1) {
        return list[0]
    }
    let ones = list.filter(t => t[i] == "1")
    let zeros = list.filter(t => t[i] == "0")

    if(ones.length < list.length / 2) {
        return co2(ones, i + 1)
    } else {
        return co2(zeros, i + 1)
    }
}

export {day3part1, day3part2}
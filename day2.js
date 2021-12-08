// should return 1488669
let day2part1 = async (input) => {
    let fwd = 0;
    let depth = 0;
    input.forEach(line => {
        let [dir, dist] = line.split(" ")
        if(dir.toLowerCase() === "forward") {
            fwd += parseInt(dist);
        } else if (dir.toLowerCase() === "down") {
            depth += parseInt(dist);
        } else if (dir.toLowerCase() === "up" ) {
            depth -= parseInt(dist);
        }
    });
    return fwd * depth;
}
// should return 1176514794
let day2part2 = (input) => {
    let fwd = 0;
    let depth = 0;
    let aim = 0;

    input.forEach(line => {
        let [dir, dist] = line.split(" ")
        if(dir.toLowerCase() === "forward") {
            fwd += parseInt(dist);
            depth += aim * dist;
        } else if (dir.toLowerCase() === "down") {
            aim += parseInt(dist);
        } else if (dir.toLowerCase() === "up" ) {
            aim -= parseInt(dist);
        }
    });
    return fwd * depth;
}

export {day2part1, day2part2}
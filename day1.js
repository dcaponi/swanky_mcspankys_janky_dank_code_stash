// should return 1316
let day1part1 = async (input) => input
    .map((j, i, a) => parseInt(a[i+1]) > parseInt(j))
    .reduce((acc, n) => acc + n, 0);

// should return 1344
let day1part2 = (input) => input
    .map((j, i, a) => parseInt(a[i+3]) > parseInt(j))
    .reduce((acc, n) => acc + n, 0);

export {day1part1, day1part2}
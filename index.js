import dotenv from "dotenv";
import axios from "axios"

import {day1part1, day1part2} from "./day1.js"
import {day2part1, day2part2} from "./day2.js"
import {day3part1, day3part2} from "./day3.js"
import {day4part1, day4part2} from "./day4.js"
import {day5part1, day5part2} from "./day5.js"
import {day6part1, day6part2} from "./day6.js"
import {day7part1, day7part2} from "./day7.js"
import {day8part1, day8part2} from "./day8.js"
import {day9part1, day9part2} from "./day9.js"
import {day10part1, day10part2} from "./day10.js"
import {day11part1, day11part2} from "./day11.js"
import {day12part1, day12part2} from "./day12.js"
import {day13part1, day13part2} from "./day13.js"
import {day14part1, day14part2} from "./day14.js"
import {day15part1, day15part2} from "./day15.js"
import {day16part1, day16part2} from "./day16.js"
import {day17part1, day17part2} from "./day17.js"
import {day18part1, day18part2} from "./day18.js"
import {day19part1, day19part2} from "./day19.js"
import {day20part1, day20part2} from "./day20.js"
import {day21part1, day21part2} from "./day21.js"
import {day22part1, day22part2} from "./day22.js"
import {day23part1, day23part2} from "./day23.js"
import {day24part1, day24part2} from "./day24.js"
import {day25part1, day25part2} from "./day25.js"

let days = {
    "1": [day1part1, day1part2],
    "2": [day2part1, day2part2],
    "3": [day3part1, day3part2],
    "4": [day4part1, day4part2],
    "5": [day5part1, day5part2],
    "6": [day6part1, day6part2],
    "7": [day7part1, day7part2],
    "8": [day8part1, day8part2],
    "9": [day9part1, day9part2],
    "10": [day10part1, day10part2],
    "11": [day11part1, day11part2],
    "12": [day12part1, day12part2],
    "13": [day13part1, day13part2],
    "14": [day14part1, day14part2],
    "15": [day15part1, day15part2],
    "16": [day16part1, day16part2],
    "17": [day17part1, day17part2],
    "18": [day18part1, day18part2],
    "19": [day19part1, day19part2],
    "20": [day20part1, day20part2],
    "21": [day21part1, day21part2],
    "22": [day22part1, day22part2],
    "23": [day23part1, day23part2],
    "24": [day24part1, day24part2],
    "25": [day25part1, day25part2],
}

dotenv.config();
let input;
let day = process.argv[2];

let url = `https://adventofcode.com/2021/day/${day}/input`
let loginCookie = process.env.SESSION;
try {
    let res = await axios.get(url, {withCredentials: true, headers:{Cookie: `session=${loginCookie}`}})
    if (res.status < 300) {
        input = res.data;
    }
} catch (e) {
    throw e.message
}

if(days[day]){
    let p1 = await days[day][0](input.split("\n"));
    console.log(`day ${day} part 1: `, p1)

    let p2 = await days[day][1](input.split("\n"));
    console.log(`day ${day} part 2: `, p2)
}


import { readInput } from '../inputUtils.js'

function getDifferences(arr) {
    let diffs = []
    for (let i = 0; i < arr.length - 1; i++) {
        diffs.push(arr[i+1] - arr[i])
    }
    return diffs
}

function mappingIsCompleted(maps) {
    if (!maps.length) return false
    return !maps[maps.length-1].some(num => num !== 0)
}

export function solve(input) {
    const lines = input.split('\n')
    let sum = 0

    for (let i = 0; i < lines.length; i++) {
        const nums = lines[i].split(" ").map(Number)
        let maps = [[...nums]]

        while (!mappingIsCompleted(maps)) {
            maps.push(getDifferences(maps[maps.length - 1]))
        }

        for (let i = maps.length - 2; i >= 0; i--) {
            maps[i].push(maps[i][maps[i].length-1] + maps[i+1][maps[i+1].length-1])
        }

        sum+= maps[0][maps[0].length-1]
    }

    return sum
}

console.log(solve(readInput()))
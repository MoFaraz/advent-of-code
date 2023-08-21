import { readInput } from '../utils/readInput.js'

const increaseLightByOne = (octopus) => {
    octopus.forEach((row, i) => {
       row.forEach((col, j) => {
           octopus[i][j] ++
       }) 
    });
}

const increaseAdjacent = (octopus, row, col) => {
    if (row === 0) {
        octopus[0][col-1]++
        octopus[0][col+1]++
        octopus[1][col]++
        octopus[1][col+1]++
        octopus[1][col-1]++
    }
    if (col === 0) {
        octopus[0][col-1]++
        octopus[0][col+1]++
        octopus[1][col]++
        octopus[1][col+1]++
        octopus[1][col-1]++

    }
}

const solve = (data) => {

    const octopus = data.split('\n').map(line => line.split('').map(n => Number(n)))
    const col = octopus[0].length
    const row = octopus.length
    increaseLightByOne(octopus)
    console.log(octopus)
}

const data = await readInput('./inputs.txt')
solve(data)



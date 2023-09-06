import { readInput } from '../utils/readInput.js'

const getKey = (x, y) => `${x},${y}`

const foldLeft = (dots, line) => {
    Object.keys(dots)
        .forEach((key) => {
            const { x, y } = dots[key]
            if (x > line) {
                const newX = 2 * line - x
                dots[getKey(newX, y)] = { x: newX, y }
                delete dots[key]
            }
        })
}

const foldUp = (dots, line) => {
    Object.keys(dots)
        .forEach((key) => {
            const { x, y } = dots[key]
            if (y > line) {
                const newY = 2 * line - y
                dots[getKey(x, newY)] = { x, y: newY }
                delete dots[key]
            }
        })
}


const solve = (data) => {
    const [dotsString, instructionsString] = data.split('\n\n')
    const dots = {}
    dotsString.split('\n').map((dot) => {
        const [x, y] = dot.split(',').map((n) => parseInt(n))
        dots[dot] = { x, y }
    })

    const instructions = instructionsString.split('\n')
    instructions.forEach((instruction) => {

        const [axis, lineString] = instruction
        .replace('fold along ', '')
        .split('=')

        const line = parseInt(lineString)

        if (axis === 'x')
            foldLeft(dots, line)
        else
            foldUp(dots, line)
    })

    const [maxX, maxY] = Object.keys(dots).reduce(
        ([maxX, maxY], key) => [
            Math.max(maxX, dots[key].x),
            Math.max(maxY, dots[key].y),
        ],
        [0, 0]
    )

    for (let y = 0; y <= maxY; y++) {
        let line = ''
        for (let x = 0; x <= maxX; x++){
            const characters = dots[getKey(x,y)] ? '#' : ' '
            line += characters
        }
        console.log(line)
    }
    return Object.keys(dots).length
}

const data = await readInput('./inputs.txt')

console.log(solve(data))

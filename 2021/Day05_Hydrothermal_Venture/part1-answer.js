import fs from 'fs'

const map = {}
const addToMap = (map, x, y) => {
    const key = `${x},${y}`
    if (map[key])
        map[key] ++
    else
        map[key] = 1
}

const countOverlap = () => {
    const points = Object.keys(map)
    return points.reduce((total, point) => {
        if (map[point] > 1) {
            return total + 1
        }
        return total
    }, 0)
}

fs.readFile('inputs.txt', (err, data) => {
    if (err) console.log(err)

    const lines = data.toString().split('\n').map((line) => line.replaceAll(' -> ', ',').split(',').map((n) => Number(n)))

    lines.forEach((line) => {
        const [x1,y1,x2,y2] = line;
        const isVertical = x1 === x2
        const isHorizantal = y1 === y2

        if (isVertical) {
            const minY = Math.min(y1, y2)
            const maxY = Math.max(y1, y2)

            for (let i = minY; i <= maxY; i++) {
                addToMap(map, x1, i)
            }
        }
        if (isHorizantal) {
            const minX = Math.min(x1, x2)
            const maxX = Math.max(x1, x2)

            for (let i = minX; i <= maxX; i++){
                addToMap(map, i, y1)
            }
        }

    })

        console.log(countOverlap())
})

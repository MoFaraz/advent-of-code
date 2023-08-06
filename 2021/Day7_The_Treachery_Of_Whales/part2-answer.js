const {readInput} = require('../utils/readInput')

const calculateFuel = (data, number) => {
    return data.reduce((fuel, num) => fuel + (calculateFuelForSteps(Math.abs(num - number))), 0)
}

const calculateFuelForSteps = (n) => (n * (n + 1)) / 2 


const solve = (data) => {
    const positions = data.split(',').map((n) => Number(n))
    const [minAlignPos, maxAlignPos] = positions.reduce(
        ([min, max], pos) => [Math.min(min, pos), Math.max(max, pos)],
        [positions[0], positions[0]]
    )
    let minFuel
    for (let alignPos = minAlignPos; alignPos <= maxAlignPos; alignPos++) {
        let fuel = calculateFuel(positions, alignPos) 
        if (fuel < minFuel || !minFuel)
            minFuel = fuel
    }

    return minFuel
}

(async () => {
    const data = await readInput('./inputs.txt')
    console.log(solve(data))
})()

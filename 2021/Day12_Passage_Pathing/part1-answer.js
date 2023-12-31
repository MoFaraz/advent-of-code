import { readInput } from '../utils/readInput.js'

const isSmallCave = (cave) => cave.toLowerCase() === cave

const getPaths = (links, visitedSmallCaves, cave) => {
    if (cave === 'end')
        return 1

    let generatedPaths = 0
    links[cave].forEach(linkedCave => {
         if (!visitedSmallCaves.includes(linkedCave)) {
            const newVisitedArray = isSmallCave(linkedCave) ? [...visitedSmallCaves, linkedCave] : visitedSmallCaves
            generatedPaths += getPaths(links, newVisitedArray, linkedCave)
         }
    })
    return generatedPaths
}

const addLink = (links, caveA, caveB) => {
    if (!caveA || !caveB)
        return
    if (links[caveA])
        links[caveA].push(caveB)
    else
        links[caveA] = [caveB]
}

const solve = (data) => {

    const links = {};
    const lines = data.split('\n')
    lines.forEach((line) => {
        const [caveA, caveB] = line.split('-')
        addLink(links, caveA, caveB)
        addLink(links, caveB, caveA)
    })

    return getPaths(links, ["start"], "start")
}

const data = await readInput('./inputs.txt')

console.log(solve(data))

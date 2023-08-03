const {readInput } = require('../utils/readInput') 

const solve = (data) => {
    let stringArray = data.toString().split("\n");
    let array = stringArray.map(Number)
    let count = 0
    for (let i = 0; i < array.length; i++){
        if (array[i]+array[i+1]+array[i+2] < array[i+1]+array[i+2]+array[i+3])
            count++
    }
    return count 
}

(async () => {
    const data = await readInput('./inputs.txt')
    console.log(solve(data)) 
})()

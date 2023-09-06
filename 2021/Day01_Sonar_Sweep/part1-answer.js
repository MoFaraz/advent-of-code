import { readInput } from '../utils/readInput.js'

const solve = (data) => {
    let array = data.toString().split("\n");
    let count = 0
    for (let i = 0; i < array.length; i++){
        if (parseInt(array[i]) <= parseInt(array[i+1]))
            count++
    
    }
    return count
}

const data = await readInput('./inputs.txt')
console.log(solve(data))



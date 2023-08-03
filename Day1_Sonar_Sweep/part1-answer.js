const {readInput }= require('../utils/readInput')


const solve = (data) => {
    let array = data.toString().split("\n");
    let count = 0
    for (let i = 0; i < array.length; i++){
        if (parseInt(array[i]) <= parseInt(array[i+1]))
            count++
    
    }
    return count
}
(async() => {
    const data = await readInput('./inputs.txt')
    console.log(solve(data))
})()



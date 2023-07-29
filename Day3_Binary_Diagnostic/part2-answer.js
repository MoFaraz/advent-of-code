const fs = require('fs')

const deleteFromArray = (array, num, index) => {
    return array.filter((line) => {
        if (parseInt(line.at(index)) !== num && line.at(index) !== undefined){
            return line;
        }
    })
}

const mostIndex = (array,index) => {
    let count = 0
    for (let i = 0; i < array.length; i++){
       if (parseInt(array[i].at(index)) === 0)
            count ++
        else 
            count --
    }
    return count;
}

fs.readFile('inputs.txt', (err, data) => {
   if (err) console.log(err);

    let stringArray = data.toString().split('\n')
    let oxygen = JSON.parse(JSON.stringify(stringArray)) 
    let co2 = JSON.parse(JSON.stringify(stringArray)) 
    for (let i = 0; i < 12; i++) {
        if (mostIndex(oxygen,i) > 0)
            oxygen = deleteFromArray(oxygen, 1, i)
        else 
            oxygen = deleteFromArray(oxygen, 0, i)
    }
     for (let i = 0; i < 12; i++) {
        if (mostIndex(co2,i) > 0)
            co2 = deleteFromArray(co2, 0, i)
        else 
            co2 = deleteFromArray(co2, 1, i)

        console.log(co2)
    }

    console.log(co2)
    console.log(oxygen)
})


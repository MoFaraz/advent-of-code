const fs = require('fs');
fs.readFile('inputs.txt', (err,data) => {
    if (err) console.log(err);

    let stringArray = data.toString().split('\n')
        
    let forward = 0 
    let depth = 0 
    let aim = 0 

    for (let i = 0 ; i < stringArray.length; i++) {
        let temp = stringArray[i].split(' ')
        let num = parseInt(temp[1])
        console.log(num)
        if (temp[0] === 'forward'){
            forward += num 
            depth += num*aim
        }
            
        if (temp[0] === 'up')
            aim -= num
        if (temp[0] === 'down') 
            aim += num
    }

    console.log(forward)
    console.log(depth)
    console.log(forward*depth)
})


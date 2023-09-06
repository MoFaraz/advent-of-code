const fs = require('fs');
fs.readFile('inputs.txt', (err,data) => {
    if (err) console.log(err);

    let stringArray = data.toString().split('\n')
        
    let forward = 0 
    let up = 0      
    let down = 0

    for (let i = 0 ; i < stringArray.length; i++) {
        let temp = stringArray[i].split(' ')
        let num = parseInt(temp[1])
        console.log(num)
        if (temp[0] === 'forward')
            forward += num 
        if (temp[0] === 'up')
            up += num
        if (temp[0] === 'down') 
            down += num 
    }

    console.log(forward)
    console.log(up)
    console.log(down)
    console.log (forward * (down - up))
})

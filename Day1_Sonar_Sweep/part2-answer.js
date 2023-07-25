const fs = require('fs');
fs.readFile('inputs.txt', function(err, data) {
    if(err) throw err;
    let stringArray = data.toString().split("\n");
    let array = stringArray.map(Number)
    let count = 0
    for (let i = 0; i < array.length; i++){
        if (array[i]+array[i+1]+array[i+2] < array[i+1]+array[i+2]+array[i+3])
            count++
    }
    console.log(count)
});


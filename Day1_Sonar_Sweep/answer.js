const fs = require('fs');
fs.readFile('inputs.txt', function(err, data) {
    if(err) throw err;
    let array = data.toString().split("\n");
    let count = 0
    for (let i = 0; i < array.length; i++){
        if (parseInt(array[i]) <= parseInt(array[i+1]))
            count++
    
    }
    console.log(count)
});

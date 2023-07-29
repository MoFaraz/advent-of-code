const fs = require('fs');
fs.readFile('inputs.txt', (err,data) => {
    if (err) console.log(err);

    let stringArray = data.toString().split('\n')
    let sum = [0,0,0,0,0,0,0,0,0,0,0,0]    
    for (let i = 0 ; i < stringArray.length; i++) {
        for (let j = 0; j < stringArray[i].length; j++) {
            if (parseInt(stringArray[i].at(j)) === 0)
                sum[j] += 1
            else
                sum[j] -= 1
        }
    }
    let leastcommon = ''
    let mostcommon = ''
    for (let i = 0; i < sum.length; i++) {
        if (sum[i] > 0){
           leastcommon += '1' 
           mostcommon += '0'
        }
        else {
            leastcommon += '0'
           mostcommon += '1'
        }
    }

    console.log(leastcommon, mostcommon)
})

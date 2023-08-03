const fs = require('fs')

const readInput = (inputPath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(inputPath, (err, data) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            resolve(data.toString())
        })

    })
}

module.exports = {
    readInput
}

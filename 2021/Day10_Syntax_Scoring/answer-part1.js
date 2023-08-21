const { readInput } = require('../utils/readInput')

const solve = (data) => {
   
    const lines = data.split('\n')
   
    const open = [ '(', '[', '{', '<' ];
    const close = [ ')', ']', '}', '>' ];
    const points = [ 3, 57, 1197, 25137 ];
    let score = 0;

    lines.forEach((line) => {
        const stack = []
        for (const char of line) {
            if (open.includes(char))
                stack.push(char)
            else {
                const previous = stack.pop()

                if (close[open.indexOf(previous)] !== char) 
                    score += points[close.indexOf(char)]; 
            }
        }
    })

    return score
}

(async () => {
    const data = await readInput('./inputs.txt')
    console.log(solve(data))
})()

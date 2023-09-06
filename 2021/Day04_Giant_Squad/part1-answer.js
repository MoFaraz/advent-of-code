import fs from 'fs'

const checkRow = (board, bingoNumberIndexOnBoard) => {
    const rowIndex = Math.floor(bingoNumberIndexOnBoard / 5)
    const reducer = (markedTotal, columnIndex) => {
        const boardIndex = rowIndex * 5 + columnIndex
        if (board[boardIndex].marked)
            return markedTotal + 1
        return markedTotal
    }

    const markedTotal = [0,1,2,3,4].reduce(reducer, 0)
    return markedTotal === 5
}

const checkColumn = (board, bingoNumberIndexOnBoard) => {
    const columnIndex = bingoNumberIndexOnBoard % 5
    const reducer = (markedTotal, rowIndex) => {
        const boardIndex = rowIndex * 5 + columnIndex
        if (board[boardIndex].marked)
            return markedTotal + 1
        return markedTotal
    }

    const markedTotal = [0,1,2,3,4].reduce(reducer, 0)
    return markedTotal === 5
}

const calculateScore = (board, bingoNumber) => {
    const boardScore = board.reduce((boardScore, item) => {
        if (item.marked)
            return boardScore
        return boardScore + item.number
    }, 0)
    return boardScore * bingoNumber
}

let score =0
fs.readFile('inputs.txt', (err, data) => {
    if (err) console.log(err)

    const [bingoNumbersAsString, ...boardsAsString]= data.toString().split('\n\n')

    const bingoNumbers = bingoNumbersAsString.split(',').map((number) => Number(number))
    const boards = boardsAsString.map((boardAsString) =>
        boardAsString.replaceAll('\n', ' ')
            .split(' ')
            .filter(Boolean)
            .map((numberAsString) => ({
            number: Number(numberAsString),
            marked: false,
        }))
    )

    bingoNumbers.some((bingoNumber) => {
        return boards.some((board) => {
            const bingoNumberOnBoard = board.find((item) => item.number === bingoNumber)

            if (!bingoNumberOnBoard)
                return

            bingoNumberOnBoard.marked = true;
            const bingoNumberIndexOnBoard = board.findIndex((item) => item.number === bingoNumberOnBoard.number)
            const isRow = checkRow(board, bingoNumberIndexOnBoard)
            const isCol = checkColumn(board, bingoNumberIndexOnBoard)

            const isWinner = isRow || isCol
            if (isWinner)
                score = calculateScore(board, bingoNumber)
            return isWinner
        })
    })

    console.log(score)
})


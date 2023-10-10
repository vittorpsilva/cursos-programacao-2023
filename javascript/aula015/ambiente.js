let num = [ 5, 8, 9, 2 ]

num.sort()
num.push(10)

// console.log(num)

for (let pos in num) {
    console.log(num[pos])
}
console.log(`O vetor tem ${num.length} posições.`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor está na posição ${pos}`)
}
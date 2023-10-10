function multiplicar() {
    let num = document.getElementById('numtxt')
    let res = document.getElementById('selftab')
    
    
    if (num.value.length == 0) {
        res.innerHTML = '[ERRO] Insira um número'
    } else {
        let n = Number(num.value)
        let c = 1
        res.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }
    }
}

/* A LÓGICA ESTÁ CORRETA
var c = 1
while (c < 10) {
    let n = 1
    let r = ++c * n
    console.log(`${n}x${c}=${r}`)
} */

/* TENTATIVA DE FAZER COM FOR

for (let pos in tab) {
            let n = Number(num.value)
            let r = n * pos
            res.innerHTML = `${n}x${pos}=${r}`
        }
*/

/*
tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let pos in tab) {
            let n = Number(num.value)
            let r = ++pos * n
            res.innerHTML = `${n}x${pos}=${r} <br>`
        } */
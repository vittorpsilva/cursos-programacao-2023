/* function multiplicar() {
    let num = document.getElementById('numtxt')
    let res = document.getElementById('res')
    
    if (num.value.length == 0) {
        res.innerHTML = '[ERRO] Insira um número'
    } else {   
        while (c < 10) {
            let n = Number(num.value)
            let r = n * c
            c++
            res.innerHTML = `${n}x${c}=${r}`
        }
      
        for (let pos in tab) {
            let n = Number(num.value)
            let r = n * pos
            res.innerHTML = `${n}x${pos}=${r}`
        }

    }
} */

var c = 1
while (c < 10) {
    let n = 1
    let r = c * n
    console.log(`${n}x${c}=${r}`)
}
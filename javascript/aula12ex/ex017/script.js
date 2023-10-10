function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'

        // aqui foi feita a conversão para number das variáveis inicio, fim e passo porque por mais que o input seja number, ele vem como string
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0) {
            
            alert('Passo inválido! Considerando passo = 1')
            p = 1
        }

            if (i < f) {
                // contagem crescente
                for (var c = i; c <= f; c += p) {
                    res.innerHTML += `${c} \u{1F449} `
                }
                // contagem decrescente
            } else {
                for (var c = i; c >= f; c-= p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
            res.innerHTML += `\u{1F3C1}`

        }
        
}
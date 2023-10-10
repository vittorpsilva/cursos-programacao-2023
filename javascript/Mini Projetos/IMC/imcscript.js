function calcular() {
    let alt = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let res = document.getElementById('res')
    let sit = 'Situação'

    if (alt.value.length == 0 || peso.value.length == 0) {
        window.alert('Insira um valor para calcular')
    } else {
        a = Number(alt.value*alt.value)
        p = Number(peso.value)
        let imc = (p / a * 10000).toFixed(2)

        
        if (imc < 17) {
            // Muito abaixo do peso
            sit = 'Muito abaixo do peso'
        } else if (imc < 18.5) {
            // Abaixo do peso
            sit = 'Abaixo do peso'
        } else if (imc < 25) {
            sit = 'Normal'
        } else if (imc < 30) {
            sit = 'Acima do peso'
        } else if (imc < 35) {
            sit = 'Obesidade 1'
        } else if (imc < 40) {
            sit = 'Obesidade 2'
        } else {
            sit = 'Obesidade 3'
        }

        res.innerHTML = `O seu IMC é ${imc}`
        res.innerHTML += `<p><strong>${sit}</strong></p>`
    }
}
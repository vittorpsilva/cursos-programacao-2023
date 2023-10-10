function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    // fazendo sozinho, eu não soube declarar corretamente a subtração entre as duas variáveis, então atenção para a necessidade de colocar .value
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro! Tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var outro = document.getElementById('outrotxt')
        var img = document.createElement('img')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                 genero = 'Criança'
            } else if (idade < 21) {
                // jovem
                var genero = 'Jovem'
            } else if (idade < 50) {
                // Adulto
                var genero = 'Adulto'
            } else {
                // Idoso
                var genero = 'Idoso'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                var genero = 'Criança'
            } else if (idade < 21) {
                // jovem
                var genero = 'Jovem'
            } else if (idade < 50) {
                // Adulta
                var genero = 'Adulta'
            } else {
                // Idosa
                var genero = 'Idosa'
            }
        }
      

        res.style.textAlign = 'center'
        res.innerHTML = `${genero} de ${idade} anos de idade.`
    }
}

// manipular o html e o css pelo javascript (DOM) é manipular dinamicamente
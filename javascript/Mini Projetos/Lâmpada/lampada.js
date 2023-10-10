var ligar = document.getElementById('ligar')
var desligar = document.getElementById('desligar')
var img = document.getElementById('lamp')

// eventos de click
ligar.addEventListener('click', ligou)
desligar.addEventListener('click', desligou)
img.addEventListener('dblclick', quebrou)

// eventos de passada de mouse
img.addEventListener('mouseover', ligou)
img.addEventListener('mouseleave', desligou)

function isLampBroken() {
    return img.src.indexOf('quebrada') > -1
}

function ligou() {
    if (!isLampBroken()) {
        img.src = './img/ligada.jpg'

        ligar.style.display = 'none'
        desligar.style.display = 'block'
    }
}

function desligou() {
    if (!isLampBroken()){
        img.src = './img/desligada.jpg'

        ligar.style.display = 'block'
        desligar.style.display = 'none'
    }
}

function quebrou() {
    img.src = './img/quebrada.jpg'
}
// script.js

function atualizarRelogio() {
    const relogio = document.getElementById("relogio");
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, "0");
    const minutos = agora.getMinutes().toString().padStart(2, "0");
    const segundos = agora.getSeconds().toString().padStart(2, "0");
    relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);

function definirAlarme() {
    const horaAlarme = document.getElementById("horaAlarme").value;
    if (horaAlarme == 0) {
        window.alert('Impossível de definir alarme.')
    } else {
        const listaAlarmes = document.getElementById("alarmes");
        const novoAlarme = document.createElement("li");
        novoAlarme.textContent = `Alarme: ${horaAlarme}`;
        listaAlarmes.appendChild(novoAlarme);
    }
}


setInterval(function () {
    const agora = new Date();
    const horaAtual = agora.getHours().toString().padStart(2, "0");
    const minutoAtual = agora.getMinutes().toString().padStart(2, "0");
    const alarmes = document.querySelectorAll("#alarmes li");

    alarmes.forEach(function (alarme) {
        const textoAlarme = alarme.textContent.split(" ")[1];
        if (textoAlarme === `${horaAtual}:${minutoAtual}`) {
            alert("Alarme disparado!");
            alarme.remove();
        }
    });
}, 1000);

var ventana;


function abrirAgenda() {
    if (window.ventana) {
        ventana.close();
    }
    ventana = window.open('agenda.html', 'Agenda', "width=auto, height=auto, left = 650px ,top=150px");
}

function abrirCalculadora() {
    if (window.ventana) {
        ventana.close();
    }
    ventana = window.open('calculadora.html', 'Calculadora', "width=auto, height=auto, left = 800,top= 200");
}

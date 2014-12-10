var ventana;


function abrirAgenda() {
    if (window.ventana) {
        ventana.close();
    }
    ventana = window.open('agenda.html', 'Agenda', "width=700px, height=800px, left = 300px ,top=100px");
}

function abrirCalculadora() {
    if (window.ventana) {
        ventana.close();
    }
    ventana = window.open('calculadora.html', 'Calculadora', "width=500px, height=600px, left = 300px ,top=100px");
}


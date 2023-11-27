
$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'https://formspree.io/f/xyyqbbaa',
            data: formData,
            dataType: 'json',
            success: function(response) {
                alert("¡El formulario se ha enviado con éxito!");
            },
            error: function(error) {
                alert("Error al enviar el formulario");
            }
        });
    });
});

// EVENT DATA

function obtenerDiaMesCreativo(fecha) {
    const [dia, mes, año] = fecha.split('-');
    const meses = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    const nombreMes = meses[parseInt(mes, 10) - 1]; 
    return `${parseInt(dia, 10)} de ${nombreMes}`;
}

const API_URL = "https://cleach-event-api.sonix.cl"
document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        mostrarEventos(data);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }

    function mostrarEventos(eventos) {
        const listaEventos = document.getElementById('proximosEventos');

        eventos.forEach(evento => {
            const card = document.createElement('div');
            card.classList.add('col-md-3');
            card.innerHTML = `
                        <div id="card-item" class="card">
                            <div class="card-body">
                            <h5 class="card-title" style="font-size: 1.2rem; font-weight: bold;">${obtenerDiaMesCreativo(evento.fecha)}</h5>
                                <h6 class="card-title" style="font-size: 1.1rem; text-decoration: underline;">${evento.nombreEvento}</h6>
                                <p class="card-text" style="font-size: 14px;">Lugar: ${evento.lugar}</p>
                                <p class="card-text" style="font-size: 14px;"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> Hora: ${evento.hora}</p>
                                <a href="${evento.link}" class="btn btn-primary" target="_blank">Más detalles</a>
                            </div>
                        </div>`;
                    listaEventos.appendChild(card);
        });
    }
});

// EVENT DATA
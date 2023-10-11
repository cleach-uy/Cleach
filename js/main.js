$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault(); // Prevenir el envío normal del formulario

        var formData = $(this).serialize(); // Obtener los datos del formulario

        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            success: function(response) {
                alert('¡El formulario se ha enviado con éxito!');
                // Aquí puedes agregar cualquier otro código que desees ejecutar después de enviar el formulario
            },
            error: function(error) {
                alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
            }
        });
    });
});

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
                alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo");
            }
        });
    });
});

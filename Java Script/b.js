document.addEventListener('DOMContentLoaded', function () {
    const cookieConsent = document.getElementById('cookieConsent');
    const aceptarCookies = document.getElementById('aceptarCookies');

    const mostrarCookieConsent = () => {
        cookieConsent.style.display = 'block';
    };

    const ocultarCookieConsent = () => {
        cookieConsent.style.display = 'none';
        // Puedes guardar una cookie o usar localStorage para recordar la elección del usuario
    };

    // Comprueba si ya se ha aceptado el consentimiento de cookies
    const seAceptaronCookies = localStorage.getItem('cookiesAceptadas');

    if (!seAceptaronCookies) {
        mostrarCookieConsent();
    }

    aceptarCookies.addEventListener('click', () => {
        ocultarCookieConsent();
        // Guarda una cookie o utiliza localStorage para recordar que se han aceptado las cookies
        localStorage.setItem('cookiesAceptadas', 'true');
    });
});

// Obtén el botón de cierre y el elemento cookie-popup
const closeBtn = document.getElementById('close-button');
const cookiePopup = document.getElementById('cookie-popup');

// Agrega un manejador de eventos al botón de cierre
closeBtn.addEventListener('click', function() {
    // Oculta el elemento cookie-popup al hacer clic en el botón de cierre
    cookiePopup.style.display = 'none';
});

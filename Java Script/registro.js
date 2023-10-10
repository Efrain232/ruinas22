const registroForm = document.getElementById('registroForm');

registroForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Aquí puedes agregar la lógica de validación y registro en el servidor.
    // Por ahora, solo mostraremos los datos en la consola.
    console.log('Nombre de Usuario:', username);
    console.log('Contraseña:', password);
    console.log('Correo Electrónico:', email);
});

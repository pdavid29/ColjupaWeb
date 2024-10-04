const verificarSesion = () => {
    if (!localStorage.getItem('usuario')) {
        window.location.href = '../index.html';
    }
};
const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
const rolUsuario = localStorage.getItem('rol');


if (usuarioGuardado) {
    document.getElementById('nombre').textContent = `${usuarioGuardado.nombre} ${usuarioGuardado.apellido}`;
    document.getElementById('documento').textContent = usuarioGuardado.documento;
    document.getElementById('email').textContent = usuarioGuardado.correo;
    document.getElementById('telefono').textContent = usuarioGuardado.telefono;
    document.getElementById('usuario').textContent = usuarioGuardado.usuario;
    document.getElementById('cargo').textContent = usuarioGuardado.cargo || rolUsuario;
} else {
    alert('No se encontraron datos de usuario. Por favor, inicia sesión nuevamente.');
    window.location.href = 'login.html';  
}
document.addEventListener('DOMContentLoaded', () => {
    verificarSesion();
});


document.getElementById('regresar').addEventListener('click', function() {
    window.history.back();
});
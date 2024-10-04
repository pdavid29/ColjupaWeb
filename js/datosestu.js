const cerrarSesion = () => {
    localStorage.removeItem('usuario');
    localStorage.removeItem('rol');

    window.location.href = '../index.html';
};

document.getElementById('cerrarSesion').addEventListener('click', (event) => {
    event.preventDefault();
    cerrarSesion();
});

const verificarSesion = () => {
    if (!localStorage.getItem('usuario')) {
        window.location.href = '../index.html';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    verificarSesion();
});

function verificarAcceso(rolesPermitidos) {
    const rolUsuario = localStorage.getItem('rol');
    const usuarioData = JSON.parse(localStorage.getItem('usuario'));
    
    if (!rolesPermitidos.includes(rolUsuario)) {
        alert('No tienes acceso a esta página.');
        window.history.back();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    verificarAcceso(['estudiante']);
});
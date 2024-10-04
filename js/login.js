const OlvidarContrasena = function () {
    alert("Contacte con el administrador para cambiar la contraseña.");
}

const url = 'https://api.jsonbin.io/v3/b/66fec624e41b4d34e43c6985';
const apiKey = '66fec624e41b4d34e43c6985';

document.getElementById('loginform').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const usuarioInput = document.getElementById('txtusuario').value;
    const passwordInput = document.getElementById('txtcontrasena').value;

    fetch(url, {
        method: 'GET',
        headers: {
            'X-Master-Key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            const roles = data.record.roles; 

            let usuarioValido = false;
            let rolUsuario = '';
            let datosUsuario = {}; 
            function validarCredenciales(rol) {
                for (let i = 0; i < roles[rol].length; i++) {
                    const usuario = roles[rol][i];
                    if (usuario.usuario === usuarioInput && usuario.password === passwordInput) {
                        usuarioValido = true;
                        rolUsuario = rol;
                        datosUsuario = usuario;
                        break;
                    }
                }
            }
            validarCredenciales('administrador');
            validarCredenciales('secretaria');
            validarCredenciales('profesor');
            validarCredenciales('estudiante');

            if (usuarioValido) {
                localStorage.setItem('usuario', JSON.stringify(datosUsuario));
                localStorage.setItem('rol', rolUsuario);
                alert(`Bienvenido, ${datosUsuario.nombre} (${rolUsuario})`);
                if (rolUsuario === 'administrador') {
                    window.location.href = './html/administrador.html';
                } else if (rolUsuario === 'secretaria') {
                    window.location.href = './html/secretaria.html'; 
                } else if (rolUsuario === 'profesor') {
                    window.location.href = './html/profesor.html';
                } else if (rolUsuario === 'estudiante') {
                    window.location.href = './html/estudiante.html'; 
                }
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        })
        .catch(error => {
            console.error('Error al obtener el JSON:', error);
            alert('Error en la autenticación. Inténtalo más tarde.');
        });
});

const jsonUrl = './json/usuarios.json';

document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usuario = document.getElementById('txtusuario').value;
    const contraseña = document.getElementById('txtcontrasena').value;

    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(usuarios => {
            let usuario_encontrado = false;
            


            for (let i = 0; i < usuarios.length; i++) {
                let user = usuarios[i];
                let rol = user.t_usuario
                
                if (user.usuario === usuario && user.contrasena === contraseña) {
                    usuario_encontrado = true;
                    
                    
                    if (rol === 'admin') {
                        window.location.href = './html/administrador.html';
                    } else if (rol === 'secretaria') {
                        window.location.href = './html/secretaria.html';
                    } else if (rol === 'profesor') {
                        window.location.href = './html/profesor.html';
                    }else if (rol  === 'estudiante'){
                        window.location.href = './html/estudiante.html'
                    }
                    break; 
                }
            }

            if (!usuario_encontrado) {
                alert('Usuario o contraseña incorrectos, o rol no válido.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('problema al cargar datos de usuario.');
        });
});
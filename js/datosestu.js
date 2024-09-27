const jsonUrl = '../json/roles.json';

const rolUsuario = 'estudiante';

fetch(jsonUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {

        if (data[rolUsuario]) {
            // Crear tabla
            let table = '<table border="1">';
            table += '<thead><tr><th>Nombre</th><th>Usuario</th><th>Email</th>';
            if (rolUsuario === 'profesor') {
                table += '<th>Materias</th>';
            } else if (rolUsuario === 'estudiante') {
                table += '<th>Grado</th><th>Sección</th>';
            }
            table += '</tr></thead><tbody>';

            data[rolUsuario].forEach(user => {
                table += '<tr>';
                table += `<td>${user.nombre}</td>`;
                table += `<td>${user.usuario}</td>`;
                table += `<td>${user.email}</td>`;
                if (rolUsuario === 'profesor') {
                    table += `<td>${user.materias.join(', ')}</td>`;
                } else if (rolUsuario === 'estudiante') {
                    table += `<td>${user.grado}</td>`;
                    table += `<td>${user.seccion}</td>`;
                }
                table += '</tr>';
            });

            table += '</tbody></table>';
            document.getElementById('user-info').innerHTML = table;
        } else {
            document.getElementById('user-info').innerHTML = '<p>No hay información disponible para este rol.</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('user-info').innerHTML = '<p>Error al cargar los datos.</p>';
    });
document.getElementById('logout').addEventListener('click', function () {

    window.location.href = '../index.html';
});
document.getElementById('personal-info').addEventListener('click', function () {
    window.location.href = '../html/formulario.html';
});
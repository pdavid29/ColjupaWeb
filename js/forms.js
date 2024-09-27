const bloquearCampos = function(){
    document.querySelectorAll('#personal-form input, #personal-form select').forEach(function(element) {
        element.disabled = true;
    });
    document.getElementById('enviar').disabled = true;
    document.getElementById('corregir').disabled = false;
}
const desbloquearCampos = () =>{
    document.querySelectorAll('#personal-form input, #personal-form select').forEach(function(element) {
        element.disabled = false;
    });
    document.getElementById('enviar').disabled = false;
    document.getElementById('corregir').disabled = true;
}
const validarCampos = () =>{
    const campos = document.querySelectorAll('#personal-form input, #personal-form select');
    for (let campo of campos) {
        if (campo.value === '') {
            return false;
        }
    }
    return true;
}

document.getElementById('personal-form').addEventListener('submit', function(event) {
    if (validarCampos()) {
        alert('Los datos se recibieron con éxito.');
        bloquearCampos();
    } else {
        alert('Faltan campos por completar. Por favor, llena todos los campos.');
    }
});


document.getElementById('corregir').addEventListener('click', function() {
    desbloquearCampos();
});


document.getElementById('regresar').addEventListener('click', function() {
    window.history.back();
});
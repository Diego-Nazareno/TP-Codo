
function validarformulario(){
    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var comentarios = document.getElementById("comentarios").value.trim();


    if(nombre==="" || correo==="" || comentarios===""){
        alert("Por favor, completar todos los campos vacíos del formulario.")
        return false
    }
    var nombreTest = /^[a-zA-Z]+$/.test(nombre) 

    if(nombreTest === false){
      alert("Por favor,ingrese un nombre con letras del alfabeto.")
      return false
    }
    alert("Se enviaron los datos correctamente.")
}
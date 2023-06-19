
//73-eliminar-propiedades  : delete
var  curso = {
    "titulo" : "Aprende JavaScript desde Cero",
    "idioma" : "Español",
    "duracion" : 30
};

delete curso.duracion;
console.log(curso);  // { titulo: 'Aprende JavaScript desde Cero', 'Español'}
console.log(curso.duracion); //undefined
function persona (nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

persona.prototype.saludar = function () {
    console.log(this.nombre, this.apellido, this.altura)
   
    if ( this.altura >= 1.60 ) console.log(`Y soy alto. Tengo una altura de ${ this.altura } mts`)
}

persona.prototype.soyAlto = () => {}

var Jaime = new persona('Jaime', 'Burbano', 1.80)
Jaime.saludar()
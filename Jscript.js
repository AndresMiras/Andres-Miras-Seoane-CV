function calculaEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

document.querySelectorAll(".anio").forEach((element) => {element.innerHTML=calculaEdad("1994/07/21")});
//Sustituye en html el elemento anio por el valor que devuelve la función, en este caso traducirá todos aquellos_
//valores que contengan el elemento anio.

function MesAnio() {
    var hoy = new Date();
    const hoyTrans = hoy.getMonth()+1;
    hoy = "0" + hoyTrans + "/" + hoy.getFullYear();

    return hoy;
}

document.querySelectorAll(".GetToday").forEach((element) => {element.innerHTML=MesAnio()});
//Sustituye en html el elemento GetToday por el valor que devuelve la función, en este caso traducirá todos aquellos_
//valores que contengan el elemento GetToday.

function muestraClase(clase){
    const etiqueta = document.getElementsByClassName(clase);
    //Recuenta todas las etiquetas que existen en el html.
    for(let i = 0; i < etiqueta.length; i++){ 
        etiqueta[i].style.display = '';
    }
}

function ocultaClase(clase){
    const etiqueta = document.getElementsByClassName(clase);
    //Recuenta todas las etiquetas que existen en el html.
    for(let i = 0; i < etiqueta.length; i++){
        etiqueta[i].style.display = 'none';  
    }
}

function myVisor() { 
    var x = document.getElementById("Selector").value;

    if (x === "vidacompleta"){
        muestraClase("proyects");
        muestraClase("comercial");
        muestraClase("programador");
    }

    if (x === "proyects"){
        muestraClase("proyects");
        ocultaClase("comercial");
        ocultaClase("programador");
    }

    if (x === "comercial"){
        ocultaClase("proyects");
        muestraClase("comercial");
        ocultaClase("programador");      
    }

    if (x === "programador"){
        ocultaClase("proyects");
        ocultaClase("comercial");
        muestraClase("programador");
    }

    document.getElementById("Selector").innerHTML.display;
  }
  // Función para el selector de vida laboral.
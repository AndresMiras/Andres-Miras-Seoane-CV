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

function myFunction() { 
    var x = document.getElementById("mySelect").value;
    document.getElementById("selector").innerHTML = "Has Seleccionado: " + x;
  }
  // Función para el selector de vida laboral.
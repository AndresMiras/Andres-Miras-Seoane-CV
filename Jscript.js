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

document.querySelectorAll(".anio").forEach((element) => {element.innerHTML=calculaEdad("1994/07/21")})

function MesAnio() {
    var hoy = new Date();
    hoy = "0" + hoy.getMonth() + "/" + hoy.getFullYear();

    return hoy;
}

document.querySelectorAll(".GetToday").forEach((element) => {element.innerHTML=MesAnio()})

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
    // hoy = `0${hoyTrans}/${hoy.getFullYear()}`;
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
        ocultaClase("comercial");
        ocultaClase("programador");
        muestraClase("proyects");
    }

    if (x === "comercial"){
        ocultaClase("proyects");
        ocultaClase("programador");
        muestraClase("comercial");      
    }

    if (x === "programador"){
        ocultaClase("proyects");
        ocultaClase("comercial");
        muestraClase("programador");
    }

    document.getElementById("Selector").innerHTML.display;
  }
  // Función para el selector de vida laboral.

  let listElements = document.querySelectorAll('.list__button--click');

  listElements.forEach(listElements => {
        listElements.addEventListener('click', () => {
            listElements.classList.toggle('arrow');
            let height = 0;
            let menu = listElements.nextElementSibling;
            if(menu.clientHeight == "0"){
               height=menu.scrollHeight; 
            }

            menu.style.height = `${height}px`;
        })
  });

  //Recorre los elementos desplegables del menú. para abrir los submenús. Pone la clase arrow y la saca.
  //Además es capaz de saber cuantos píxeles ocupan los submenús para hacer el desplegable.

  
$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
});

    //Botón para que se me desplace a la parte superior de la página.


function generarNumeroSecreto(){
  return Math.floor(Math.random()*10);
}
let intentos = 0;
let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
function asignarTextoElemento(elemento,texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento(){
  console.log('entro verificarIntento');
  let numeroUsuario = parseInt(document.getElementById('numeroInput').value);
  console.log(`el numero de usuario es ${numeroUsuario} y secreo es ${numeroSecreto}`);
  if(numeroUsuario == numeroSecreto){
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos===1? 'vez':'veces'}`)
    document.getElementById('reiniciar').removeAttribute('disabled');
  }
  else{
    if(numeroUsuario>numeroSecreto){
      asignarTextoElemento('p','el numero secreto es menor');
      console.log("menor");
    }
    else{
      console.log("mauyor");
      asignarTextoElemento('p','el numero secreto es mayor');
    }
    intentos++;
    limpiarCajar();
  }
  return;
}

function limpiarCajar(){
  let valorCaja =  document.querySelector('#numeroInput');
  valorCaja.value = '';
}
function condicionesIniciales(){
  asignarTextoElemento('h1','Ola k ace');
  asignarTextoElemento('p','Indica un numero del 1 a 10');
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function intentoDeUsuario(){
  alert('Click');
  return;
}
function reiniciarJuego(){
  //limpiarCaja
  limpiarCajar();
  //Indicar mensaje de intervalo de numeros
  condicionesIniciales();
  //Generar el numero aleatorio
  //Deshabilitar el boton de nuevo juego
  //Inicializar el numero de intentos
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();

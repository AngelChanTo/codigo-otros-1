/*
esto es un codigo de js que trae datos de la api de github y los muestra en l

*/
const baseEndpoint = 'https://api.github.com'; //almacena la info de la url de github en esta constante 
const usersEndpoint = `${baseEndpoint}/users`;//aqui se declara la ruta para acceder al endpoint referente a los usuarios usando las plantillas literales para usar la variable definida anterioremente
const $n = document.querySelector('.name'); //guardamos en la constante la seleccion de la clase name
const $b = document.querySelector('.blog'); //guardamos en la constante la seleccion del id blog
const $l = document.querySelector('.location'); //guardamos en la constante la seleccion de la clase location

//esta es una funcion asincrona para el uso de await en la funcion fetch
async function displayUser(username) {
  try{ //establecemos los bloques try y cathc para el manejo de errores al hacer la solicitud a la api
  $n.textContent = 'cargando...';//establecemos  el contenido del elemento seleccionado como cargando
  const response = await fetch(`${usersEndpoint}/${username}`); //se hace una solicitud usando la funcion  fetch para obtener los datos del usuario, usando la url establecida en usersEndpoint y el username 
  const data = await response.json(); //guardamos la respuesta en formato json
  
  console.log(data); //imprimimos la informacion obtenida de la llamada a la api.
  $n.textContent = `${data.name}`; //establemos el valor de la variable con respecto a la informacion obtenida de la llamada
  $b.textContent = `${data.blog}`; //establemos el valor de la variable con respecto a la informacion obtenida de la llamada
  $l.textContent = `${data.location}`; //establemos el valor de la variable con respecto a la informacion obtenida de la llamada
  } catch(err){ //manejo de errores con la funcion handle error
    handleError(err);
  }
}

function handleError(err) { //funcion handle error
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError); //probamos la funcion
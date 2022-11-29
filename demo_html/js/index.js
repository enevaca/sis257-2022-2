document.getElementById('h2Texto').innerHTML = 'Texto desde JavaScript';
document.getElementById('h2Texto').style.color = 'blue';
document.getElementById('h2Texto').style.backgroundColor = 'gray';

var ejemploClass = document.getElementsByClassName('ejemploClass');

function consultarJson() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
}


function comparar(a,b){return a - b}

ejemplo=new Array(10, 8, 9, 5, 3, 78, 23)

function ordenar(){

  ejemplo1=ejemplo.sort(comparar)

  alert('el orden de los números es  ' + ejemplo1[0] + '-' + ejemplo1[1] + '-' + ejemplo1[2] + '-' + ejemplo1[3] + '-' + ejemplo1[4] + '-' + ejemplo1[5] + '-' + ejemplo1[6]);
}

ordenar();
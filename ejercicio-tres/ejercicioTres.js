let valor = [];
let valorIngresado = prompt('Introduce un numero para guardarlo en una variable: ');
if (isNaN(valorIngresado)) {
    alert("NO ES UN NUMERO")
} else {
    for (let i = 0; i < valorIngresado; i++) {
    
            let numero = Math.random()
            valor.push(numero)
    
    
    }  
}
console.log(valor);




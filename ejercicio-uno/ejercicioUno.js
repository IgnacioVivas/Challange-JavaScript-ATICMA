

const CantidadMayusculas = () => {
    let textAreaValue = document.getElementById("exampleFormControlTextarea1").value;

    let contar = 0;
    let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < mayusculas.length; i++) {
        for (let x = 0; x < textAreaValue.length; x++) {
            if (textAreaValue[x] == mayusculas[i]) {
                contar += 1;
            }
        }
    }
    document.getElementById("exampleFormControlTextarea1").value = ""
    return alert("La cantidad de mayusculas es " + contar);


}


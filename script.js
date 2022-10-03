const title = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const button = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

form.addEventListener("submit", sumaInputValues);

function sumaInputValues(event){
    //console.log({event})
    event.preventDefault();
    const suma = input1.value + input2.value
    result.innerHTML = "resultado: " + suma
}
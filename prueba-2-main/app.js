'use strict'
const GI = {
    createElement(tag, atributes) {
        let element = document
        return document.createElement(tag)
    }
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

const container = document.getElementById("container");
const elementoUl = document.createAttribute("ul");

let arrayElemento = []

to_do.forEach((x) => {
    let elementoLi = document.createElement("li");
    let elementoCheckBox = document.createElement("input");
    elementoCheckBox.setAttribute("type", "checkbox")

    let elementoSpan = document.createElement("span");
    elementoSpan.textContent = x

    let elemento = {
        check: elementoCheckBox,
        elementoSpan: elementoSpan
    }

    arrayElemento.push(elemento);

    elementoLi.append(elementoCheckBox, elementoSpan)
    elementoUl.append(elementoLi);
});

container.append(elementoUl);


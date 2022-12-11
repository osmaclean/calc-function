

let n1 = "0";
let operacao = null;
let n2 = "";

function incluirDigito(digito) {

    if (operacao !== null) {
        n2 = n2 + digito;
        mostrarNoDisplay(n2);
    } else {
        if (n1 === "0") {
            n1 = digito;
        } else {
            n1 = n1 + digito;
        }
        mostrarNoDisplay(n1)
    }
}

function calcular() {
    
    let nCalculado = 0;
    let _n1 = parseFloat(n1);
    let _n2 = parseFloat(n2);

    switch (operacao) {
        case '+':
            nCalculado = _n1 + _n2;
            break;
        case '-':
            nCalculado = _n1 - _n2;
            break;
        case '*':
            nCalculado = _n1 * _n2;
            break;
        case '/':
            nCalculado = _n1 / _n2;
            break;
    }
    return nCalculado;
}

function iniciarCalculo(simbolo) {

    if(operacao === null || n2 === ""){
        operacao = simbolo;
    } else {
        // Já tem n1, operacao e n2.
        let resultado = calcular();
        n1 = resultado;
        operacao = simbolo;
        n2 = "";
        mostrarNoDisplay(n1)
    }

    operacao = simbolo;

    console.log(n1, operacao, n2);
}

function mostrarNoDisplay(valor) {
    document.querySelector('#display').innerHTML = valor;
}














































































































































































































































































































































































































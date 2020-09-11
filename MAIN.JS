let calculaTotal = 0;
let armazenando = "0";
let operadorAnterior;
const visor = document.querySelector('screen');

function iniciar() {
    //Adicionando a escuta aos eventos de clique nos botões
    document
        .querySelector('.calc-buttons')
        .addEventListener('click', function(evento){
            //alert(`Botão Clicado: ${evento.target.innerText}`);
            botaoClicado(evento.target.innerText);
        });
 }
  
 function botaoClicado(valor) {
    //Se não é um número
    if(isNaN(parseInt(valor))) {
        manipularSimbolo(valor);
    }else{
        manipularNumero(valor);
    }
    renderizar(); //Escrever na tela
 }
function manipularNumero(valor);
if(armazenado == "0"); {
    armazenamento == valor; 
}else {
    //Contatenar os numeros que aparecena tela
       armazenado += valor;
    }
 }
 function manipularSimbolo(valor) {
    switch(valor){
        case "C":
            armazenado = "0";//String que aparece na tela
            calculaTotal = 0;//Valor numérico a ser calculado
            break;
        case "=":
            if(operadoAnterior === null)
                return
            executarOperacao(parseInt(armazenado));
            operadorAnterior = null;
            armazenado += calculaTotal;
            calculaTotal = 0;
            break;
        case "←":
            if(armazenado.length === 1){
                armazenado = ;
            }else{
                //Removendo um caractere
                armazenado = armazenado.substring(0,armazenado.length-1)
            }
            break;
        case "÷":
        case "×":
        case "-":
        case "+":
            manipularMatematica();
            break;
    }
 }
function manipularmatematica(valor){
if(armazenado === '0'){
    //faz nada
    return
}
} 
const inteiroArmazenado = parseInt(armazenad0);
calcularTotal = inteiroArmazenado;
}else {
    executarOperacao(inteiroArmazenado);
}

operadoranterior = valor;
//Zerar o que esta na tela
armazenado = "0";
}


function executarOperacao(inteiroArmazenado) {
    switch(operadoAnterior){
        case "÷":
            calculaTotal /= inteiroArmazenado;
            break;
        case "×":
            calculaTotal *= inteiroArmazenado;
            break;
        case "-":
            calculaTotal -= inteiroArmazenado;
            break;
        case "+":
            calculaTotal += inteiroArmazenado;
            break;
    }
 }
 
 
 
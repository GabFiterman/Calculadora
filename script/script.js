
var numeroTela = document.getElementById('resultado');

var resultado = 0;

/** Função que pega o valor selecionado pelos botões
 * 
 * @param {*} valor 
 */
function escolheNumero(valor){
    if(valor != 'ac'){
        numeroTela.value += valor;
    } else{
        numeroTela.value = '';
        resultado = 0;
        console.log('--- USUÁRIO LIMPA A TELA ---')
    }
}

function soma(){
    numeroTela.value += '+';
    
}

function subtracao(){
    numeroTela.value += '-';
}

function multiplicacao(){
    numeroTela.value += '*';
}

function divisao(){
    numeroTela.value += '/';
}

function retornaResultado(){
    resultado = eval(numeroTela.value);
    numeroTela.value = resultado;
}
var numeros = [];
var visorPrincipal = document.getElementById('visorNumberOne').innerHTML;
var numOne;
var numTwo;
var operacao;

function numbers(n){
    if(visorPrincipal === '0'){
        visorPrincipal = n;
    }else{
        visorPrincipal += n;
    }
    document.getElementById('visorNumberOne').innerHTML = visorPrincipal;
}

function operator(o){
    numOne = parseInt(visorPrincipal);
    numeros.push(numOne);
    document.getElementById('visorNumberOne').innerHTML = '0';
    document.getElementById('visorNumberTwo').innerHTML = numOne + o;
    visorPrincipal = '0';

    if(o === ' + '){
        operacao = 1;
    }else if(o === ' - '){
        operacao = 2;
    }else if(o === ' x '){
        operacao = 3;
    }else{
        operacao = 4;
    }
    
    //console.log(operacao);

/* TENTAR FAZER UMA FUNÇÃO DENTRO DA OUTRA.
 JOGAR NUMEROS COMO PARAMETRO DENTRO DE OPERATOR
 RODAR UM SWITCH PEQUENO, CADA CASE CHAMANDO A OUTRA
 FUNÇÃO(QUE DEVE SER CRIADA ANTERIORMENTE COM O PUSH)
 APENAS PARA SUBSTITUIR O 'o' E TENTAR RELACIONAR ESSES NUMEROS
COM A OPERAÇÃO DESEJADA LA NA FUNÇÃO RESULTADO().*/


}


function resultado(){
    numTwo = parseInt(visorPrincipal);
    numeros.push(numTwo);
    document.getElementById('visorNumberTwo').innerHTML += numTwo;

    switch(operacao){
        case 1:
            document.getElementById('visorNumberOne').innerHTML = numOne + numTwo;
            break;
        case 2:
            document.getElementById('visorNumberOne').innerHTML = numOne - numTwo;
            break;
        case 3:
            document.getElementById('visorNumberOne').innerHTML = numOne * numTwo;
            break;
        case 4:
            document.getElementById('visorNumberOne').innerHTML = numOne / numTwo;
            break;

        
    }
   
} 

function clearing(){
    document.getElementById('visorNumberOne').innerHTML = 0;
    document.getElementById('visorNumberTwo').innerHTML = '';
    numOne = 0;
    numTwo = 0;
    visorPrincipal = '';
   



}
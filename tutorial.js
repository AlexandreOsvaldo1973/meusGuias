/*alert("Testando outro script");

function mostraData()
{
    document.getElementById("data").innerHTML=Date();
}

function mostraMensagem()
{
    alert('Estou aprendendo');
}

var nome = prompt("Digite seu nome: ");
var idade = prompt("Digite sua idade: ");
idade = parseInt(idade);
var altura = prompt("Digite sua altura: ");
altura = parseFloat(altura);

var num1 = prompt("Primeiro número: ");
num1 = parseInt(num1);
var num2 = prompt("Segundo número: ");
num2 = parseInt(num2);

var soma = num1 + num2;
var subtrai = num1 - num2;
var multiplica = num1 * num2;
var divide = num1 / num2;

var teste;
teste = 1;
teste = teste + 1;
teste = teste * teste;

function enviar(){
    var valor = document.getElementById("textinput").value;
    alert("Veja o que você escreveu: " + valor);
}

function compara1(){
    let number1 = document.getElementById("textinput1").value;
    let number2 = document.getElementById("textinput2").value;
    resulta = number1 == number2
    alert(resulta);
}

function compara2(){
    let number1 = document.getElementById("textinput3").value;
    let number2 = document.getElementById("textinput4").value;
    resulta = number1 != number2
    alert(resulta);
}

function compara3(){
    let number1 = document.getElementById("textinput5").value;
    let number2 = document.getElementById("textinput6").value;
    resulta = number1 > number2
    alert(resulta);
}

function compara4(){
    let number1 = document.getElementById("textinput7").value;
    let number2 = document.getElementById("textinput8").value;
    resulta = number1 >= number2
    alert(resulta);
}

function compara5(){
    let number1 = document.getElementById("textinput9").value;
    let number2 = document.getElementById("textinput10").value;
    resulta = number1 < number2
    alert(resulta);
}

function compara6(){
    let number1 = document.getElementById("textinput11").value;
    let number2 = document.getElementById("textinput12").value;
    resulta = number1 <= number2
    alert(resulta);
}

function entrar(){
    var idade = parseInt(document.getElementById("idade").value);

    if(idade<18){
        alert("Você tem " + idade + " anos, menores de idade não podem entrar");
    } else {
        alert("Você pode entrar");
    }
}

var senha = '2112';
function login(){
    var tentativa = document.getElementById("password").value;

    if (tentativa == senha){
        alert("Senha correta, login efetuado!");
    } else {
        alert("Senha incorreta, tente novamente...");
    }
}

function aposentar(){
    var idade = parseInt(document.getElementById("idade").value);

    if(idade<68){
       alert("Faltam " + (68-idade) + " anos para aposentar");
    } else {
        alert("Você já pode se aposentar");
    }

}

function numero(){
    var numero = parseFloat(document.getElementById("num").value);

    if (numero > 0){
        alert("O número é positivo");
    }
    if(numero < 0){
        alert("O número é negativo");
    }
    else {
        alert("O número é nulo.");
    }
}

function maior(){
    var numero1 = parseFloat(document.getElementById("num1").value);
    var numero2 = parseFloat(document.getElementById("num2").value);

    if(numero1 > numero2){
        alert(numero1 + " é maior que " + numero2);
    }
    if(numero1 < numero2){
        alert(numero2 + " é maior que " + numero1);
    }
    else {
        alert("Os numeros são iguais");
    }
}

function checar(){
    var age = parseInt(document.getElementById("idade").value);
    var salary = parseFloat(document.getElementById("salario").value);

    if(age > 17 && salary > 2000){
        alert("Sua idade é " + age + " e seu salário " + salary + " então pode financiar");
    } else {
        alert("Sua idade é " + age + " e seu salário " + salary + " então não pode financiar");
    }
}


function fila(){
    var senha = parseInt(document.getElementById("identifica").value);

    if(senha == 1 || senha == 2 || senha == 3){
        alert(senha + " Fila Preferêncial");
    } else {
        alert(senha + " Fila comum");
    }
}

*/

function fila(){
    var senha = parseInt(document.getElementById("identifica").value);

    switch(senha){
        case 1:
            alert(senha + " Fila preferencial para gestantes");
            break;
        case 2:
            alert(senha + " Fila preferencial para 3º idade");
            break;
        case 3:
            alert(senha + " Fila preferencial para necessidades especiais")
            break;
        case 4:
            alert(senha + " Fila normal")
            break;
        default: alert("Escolha uma opção de senha válida: ");
    }
}
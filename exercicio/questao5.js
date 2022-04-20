function clique(){
    var a=parseFloat(prompt("Digite o primeiro número: "));
    var b=parseFloat(prompt("Digite o segundo número"));
    document.querySelector("#somar").innerHTML="A soma dos valores é: "+(a+b);
    document.querySelector("#subtrair").innerHTML="A subtração dos valores é: "+(a-b);
    document.querySelector("#multiplicar").innerHTML="A multiplicação dos valores é: "+(a*b);
    document.querySelector("#dividir").innerHTML="A divisão dos valores é: "+(a/b);
}
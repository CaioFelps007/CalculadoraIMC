
/*
Resultado abaixo de 17 - Muito abaixo do peso;<br>
            Resultado entre 17 e 18,49 - abaixo do peso;<br>
            Resultado entre 18,5 e 24,99 - peso ideal;<br>
            Resultado entre 25 e 29,99 - Sobrepeso;<br>
            Resultado entre 30 e 34,9 - Obesidade grau I;<br>
            Resultado entre 35 e 39,9 - Obesidade grau II(severa);<br>
            Resultado acima de 40 - Obesidade grau III (mórbida);<br>
            
*/
var altura;
var peso;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();

    peso = parseFloat(document.getElementById("peso").value.replace(",","."));
    altura = parseFloat(document.getElementById("altura").value.replace(",","."));

    imc = peso / (altura * altura);
    
     resultado = document.getElementById("resultado")

    if (imc < 17) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br> Seu resultado foi:" + imc + "<br> Cuidado você está muito abaixo do peso!";
        resultado.style.css = 'backgroud-color: red;';
    } else if (imc >= 17 && imc <= 18.49) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi:" + imc.toFixed(2) + "<br/> Abaixo do peso!";
        resultado.style.cssText = 'backgroud-color: red;';
    } else if (imc >= 18.5 && imc <= 24.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi:" + imc.toFixed(2) + "<br/> Você está no peso ideal!";
    } else if (imc >= 25 && imc <= 29.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi:" + imc.toFixed(2) + "<br/> Vcoê está com sobrepeso!";
        resultado.style.cssText = 'backgroud-color: red;';
    }  else if (imc >= 30 && imc <= 34.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi:" + imc.toFixed(2) + "<br/> CUIDADO! Obesidade grau I!";
        resultado.style.cssText = 'backgroud-color: red;';
    }  else if (imc >= 35 && imc <= 39.99) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi:" + imc.toFixed(2) + "<br/>  CUIDADO! Obesidade grau II!";
        resultado.style.cssText = 'backgroud-color: red;';
    }  else if (imc >= 48) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu resultado foi:" + imc.toFixed(2) + "<br/>  CUIDADO! Obesidade grau III!";
        resultado.style.cssText = 'backgroud-color: red;';
    } 
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
} 


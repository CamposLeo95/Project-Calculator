var resultado = document.querySelector("#result")


function inserir(num){

    resultado.innerHTML += num;

}

function reset(){
    resultado.innerHTML = " "
}

function calc(){
    
 document.getElementById("result").innerHTML = eval(resultado.innerHTML)

}
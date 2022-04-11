var resultado = document.querySelector("#result")


function inserir(num){

    resultado.innerHTML += num;

}

function reset(){
    resultado.innerHTML = " "
}

function calc(){
    
   let algo = resultado.innerHTML = eval(resultado)

}
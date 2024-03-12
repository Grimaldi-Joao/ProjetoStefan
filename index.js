var dificuldade = document.querySelector("input[name='Dificuldade']")// uma variavel que irá pagar todas as variaveis com o nome Dificuldade
var check_Mai = document.getElementById("L_Maiuscula")
var check_Ma = document.getElementById("L_Minuscula")
var check_Num = document.getElementById("Numeros")
var check_Simb = document.getElementById("Simbolos")

const difficultyElements = document.querySelectorAll('input[name="Dificuldade"]');
    difficultyElements.forEach((element) => {
        element.addEventListener("change", () => {
            changeDifficulty();
        });
    });//essa função serve para passar pela variavel dificuldade e vê qual estar carregada

function changeDifficulty() {
    let difficulty = document.querySelector('input[name="Dificuldade"]:checked').value;
        if(difficulty === "Ler"){
            check_Mai.checked = true;
            check_Ma.checked = true;
            check_Num.checked = false;
            check_Simb.checked = false;
        }
        if(difficulty === "Pronunciar"){

        }
        if(difficulty === "Todos"){
            check_Mai.checked = true;
            check_Ma.checked = true;
            check_Num.checked = true;
            check_Simb.checked = true;
        }
}// essa função funciona de forma que quando verifica qual é a verdadeira ela aplicará seu coportamento

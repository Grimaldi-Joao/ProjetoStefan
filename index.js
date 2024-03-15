var dificuldade = document.querySelector("input[name='Dificuldade']");
// uma variavel que irá pagar todas as variaveis com o nome Dificuldade
var check_dupli = document.getElementById("Repetido");
var check_Mai = document.getElementById("L_Maiuscula");
var check_Ma = document.getElementById("L_Minuscula");
var check_Num = document.getElementById("Numeros");
var check_Simb = document.getElementById("Simbolos");
var r_barra = document.getElementById("barra");

const input_Senha = document.querySelector(".input_box input");
const confs = document.querySelectorAll(".conf input");
var gerar_Senha = document.querySelector(".gerador");
const t_senha = document.querySelector(".tamanho input");



const Characters ={
    L_Minuscula:"abcdefghijklmnopqrsutvxwyzç",
    L_Maiuscula:"ABDEFGHIJKLMNPQRSUTVXWYZÇ",
    Numeros:"0123456789",
    Simbolos:"!@#$%¨&*(){}?:;/|'<>.,",
}

const gerarsenha = () => {
    let static_senha = "",
        random_senha = "",
        excluir_dupli = false,
        tamnho_senha = t_senha.value;

        const difficulty = document.querySelector('input[name="Dificuldade"]:checked').value;

        confs.forEach(conf =>{
            if(conf.checked){
                if(conf.id !== "Repetido" && difficulty !== "Ler"){
                    static_senha += Characters[conf.id];
                }else if (difficulty === "Ler") {
                    static_senha += Characters[conf.id].replace(/[/ilo0O°cçC/]/g, "");
                }
                else{
                    excluir_dupli = true;
                }
            }
            });

        for (let i = 0; i < tamnho_senha; i++) {
            let random_Char = static_senha[Math.floor(Math.random() * static_senha.length)]
            if(excluir_dupli){
            if (!random_senha.includes(random_Char)) {
                random_senha += random_Char;
            }else{
                i--;
            }
            }else{
                random_senha += random_Char;
            }
        }
        
        input_Senha.value = random_senha;
        
}


const difficultyElements = document.querySelectorAll('input[name="Dificuldade"]');
    difficultyElements.forEach((element) => {
        element.addEventListener("change", () => {
            changeDifficulty();
        });
    });
//essa função serve para passar pela variavel dificuldade e vê qual estar carregada

function changeDifficulty() {// otimizar a função, deixar tudo true e ficar mudando para false
    let difficulty = document.querySelector('input[name="Dificuldade"]:checked').value;
        if(difficulty === "Ler"){
            check_Mai.checked = true;
            check_Ma.checked = true;
            check_Num.checked = true;
            check_Simb.checked = false;

        }
        if(difficulty === "Pronunciar"){
            check_Mai.checked = true;
            check_Ma.checked = true;
            check_Num.checked = false;
            check_Simb.checked = false;
        }
        if(difficulty === "Todos"){
            check_Mai.checked = true;
            check_Ma.checked = true;
            check_Num.checked = true;
            check_Simb.checked = true;
        }
}
// essa função funciona de forma que quando verifica qual é a verdadeira ela aplicará seu coportamento

gerar_Senha.addEventListener("click", () => {gerarsenha()});


window.addEventListener("load", function() {
    document.getElementById("d_Pronunciar").checked = true;
    changeDifficulty();
    gerarsenha();
})
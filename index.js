var dificuldade = document.querySelector("input[name='Dificuldade']");
// uma variavel que irá pagar todas as variaveis com o nome Dificuldade
var check_dupli = document.getElementById("Repetido");
var check_Mai = document.getElementById("L_Maiuscula");
var check_Ma = document.getElementById("L_Minuscula");
var check_Num = document.getElementById("Numeros");
var check_Simb = document.getElementById("Simbolos");

const r_barra = document.querySelector(".barra");
const input_Senha = document.querySelector(".input_box input");
const confs = document.querySelectorAll(".conf input");
var gerar_Senha = document.querySelector(".gerador");
const t_senha = document.querySelector(".tamanho input");
const icone_Copiar = document.querySelector(".input_box span");
var largura_DaBarra = 0;



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

const test_Char = {
    L_Minuscula : /[a-z]/,
    L_Maiuscula : /[A-Z]/,
    Numeros : /[0-9]/,
    Simbolos: /[!@#$%¨&*(){}?:;/|'<>.,]/
}

const Forca = (largura_DaBarra) =>{
    r_barra.id = largura_DaBarra <= 96 ? "Fraco" : largura_DaBarra <= 196 ? "Media" : "Forte";
    switch (r_barra.id) {
        case "Fraco":
            r_barra.style.background = "red"
            break;
        
        case "Media":
            r_barra.style.background = "yellow"
            break;
        
        case "Forte":
            r_barra.style.background = "green"
        break;

        default:
            break;
    }
}


const att_Forca = () =>{
    var cont = 0;
    for(const char of Object.values(test_Char)){
        if(char.test(input_Senha.value)){
            cont += 40
        }
    }
    const valores=[8,12,16,20,26]
    for(const tam of valores){
        if (input_Senha.value.length >= tam) {
            cont += 40
        }
    }
    if (check_dupli.checked === true) {
        cont += 40
    }
    largura_DaBarra = cont;
    r_barra.style.width = cont +"px";
    Forca();
    return r_barra;
}


const copiar = () =>{
    navigator.clipboard.writeText(input_Senha.value);
    icone_Copiar.innerText = "check";
    setTimeout(() =>{
        icone_Copiar.innerText = "copy_all";
    })
}

icone_Copiar.addEventListener("click", () => {copiar()})
gerar_Senha.addEventListener("click", () => {gerarsenha()});
gerar_Senha.addEventListener("click", () => {att_Forca()});

window.addEventListener("load", function() {
    document.getElementById("d_Pronunciar").checked = true;
    changeDifficulty();
    gerarsenha();
    att_Forca();
})
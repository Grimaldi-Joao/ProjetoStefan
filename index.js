var dificuldade = document.querySelector("input[name='Dificuldade']")
// uma variavel que irá pagar todas as variaveis com o nome Dificuldade
var check_dupli = document.getElementById("Repetido")
var check_Mai = document.getElementById("L_Maiuscula")
var check_Ma = document.getElementById("L_Minuscula")
var check_Num = document.getElementById("Numeros")
var check_Simb = document.getElementById("Simbolos")
var r_barra = document.getElementById("barra")
var n_Simb = document.getElementById("q_Numeros")
var t_senha = document.getElementById("tamanho")

const confs = document.querySelectorAll(".conf input");



const Characters ={
    minusculo:"abcdefghijklmnopqrsutvxwyzç",
    maiusculo:"ABCDEFGHIJKLMNOPQRSUTVXWYZÇ",
    numeros:"0123456789",
    simbolus:"!@#$%¨&*(){}?:;/|'\'<>.,°",
    ambiguos:"ilo0°cç"
}

const gerarsenha = () => {
    let static_senha = "",
        random_senha = "",
        excluir_dupli = false,
        tamnho_senha = t_senha.value;

        confs.forEach(conf =>{
            if(conf.checked){
                if(conf.id !== "Repetido"){
                    static_senha += Characters[conf.id];
                }else{
                    excluir_dupli = true;
                }
            }
        });

        for (let i = 0; i < tamnho_senha; i++) {
            let difficulty = document.querySelector('input[name="Dificuldade"]:checked').value;
            let random_Char = static_senha[Math.floor(Math.random() * static_senha.length)]
            if(excluir_dupli){
            !random_senha.includes(random_Char) || random_Char == " " ? random_senha += random_Char : i--
            }else if(difficulty === "Ler"){

            }else{
                random_senha += random_Char;
            }
        }
        
}


const difficultyElements = document.querySelectorAll('input[name="Dificuldade"]');
    difficultyElements.forEach((element) => {
        element.addEventListener("change", () => {
            changeDifficulty();
        });
    });
//essa função serve para passar pela variavel dificuldade e vê qual estar carregada

function changeDifficulty() {
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

n_Simb.addEventListener('input', function(){
    var key = n_Simb.value;
    r_barra.value = 0;
    
    switch (key) {

        case (key<8):
            r_barra.value = 0;
        break;

        case (8<=key<=11):
            r_barra.value =+ 10;
            break;

        case (12<=key<=15) :
            r_barra.value =+ 20;
            break;
        
        case (16<=key<=20):
            r_barra.value =+30;
            break;

        case (21<=key<=25):
            r_barra.value =+40
            break;

        case (26<=key<=50):
            r_barra.value =+ 50
            break;

        case (50<key):
            r_barra.value = 0;
            break;

        default:
            break;
    }
    r_barra.value = this.value;
    
})
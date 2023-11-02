

var letras_1 = true;
var numeros_1 = true;
var caracteres_especiais_1 = true;

var checkbox_element_1 = document.querySelector("#checkbox_1");
var checkbox_element_2 = document.querySelector("#checkbox_2");
var checkbox_element_3 = document.querySelector("#checkbox_3");

checkbox_element_1.addEventListener("click", checkbox_element_1_click_1);
checkbox_element_2.addEventListener("click", checkbox_element_2_click_1);
checkbox_element_3.addEventListener("click", checkbox_element_3_click_1);

gerarSenha_2();

var generate_button_1 = document.querySelector("#id_generatePassword_1");

generate_button_1.addEventListener("click", gerarSenha_2);

function checkbox_element_1_click_1(){
    if(!letras_1){
        letras_1 = true;
        checkbox_element_1.style.setProperty("--active_1", 1);
    }
    else{
        if(numeros_1 || caracteres_especiais_1){
            letras_1 = false;
            checkbox_element_1.style.setProperty("--active_1", 0);
        }
    }
}

function checkbox_element_2_click_1(){
    if(!numeros_1){
        numeros_1 = true;
        checkbox_element_2.style.setProperty("--active_1", 1);
    }
    else{
        if(letras_1 || caracteres_especiais_1){
            numeros_1 = false;
            checkbox_element_2.style.setProperty("--active_1", 0); 
        }
    }
}

function checkbox_element_3_click_1(){
    if(!caracteres_especiais_1){
        caracteres_especiais_1 = true;
        checkbox_element_3.style.setProperty("--active_1", 1);
    }
    else{
        if(numeros_1 || letras_1){
            caracteres_especiais_1 = false;
            checkbox_element_3.style.setProperty("--active_1", 0); 
        }
    }
}

function gerarSenha_1(letras_2 = false, numeros_2 = false, caracteres_especiais_2 = false, length_2 = 20){
    let password_1 = "";

    let ascii_array_1 = [];

    for(let i1 = 0; i1 < 123; i1++){
        ascii_array_1.push(i1);
    }

    //let sub_1 = 32;
    //let sub_2 = 0;
    //let sub_3 = 0;

    if(!letras_2){
        ascii_array_1.splice(97, 26);
        ascii_array_1.splice(91, 6);
        ascii_array_1.splice(65, 26);
    }
    else{
        ascii_array_1.splice(91, 6);
    }

    ascii_array_1.splice(58, 7);

    if(!numeros_2){
        ascii_array_1.splice(48, 10);
    }

    if(!caracteres_especiais_2){
        ascii_array_1.splice(33, 15);
    }

    ascii_array_1.splice(0, 33);

    //console.log(ascii_array_1);

    for(let i1 = 0; i1 < length_2; i1++){
        password_1 += String.fromCharCode(ascii_array_1[getRandomInt(ascii_array_1.length)]);
    }

    return password_1;
}

function gerarSenha_2(){
    definirSenha_1(gerarSenha_1(letras_1, numeros_1, caracteres_especiais_1));
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function definirSenha_1(password_1 = ""){
    let output_password_1 = document.querySelector("#id_output_password_1");

    output_password_1.innerHTML = password_1;
}

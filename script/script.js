document.querySelector('.btn_Orbitron').onclick = select_one;

let x = document.querySelector('.example');

function select_one(){

    x.style.fontFamily = "Orbitron";
}

document.querySelector('.btn_Karantina').onclick = select_two;

function select_two(){
    

    x.style.fontFamily = 'Karantina';
}

document.querySelector('.btn_Zilla').onclick = select_three;

function select_three(){
    

    x.style.fontFamily = 'Zilla Slab Highlight';
}

document.querySelector('.btn_Dancing').onclick = select_four;

function select_four(){
    

    x.style.fontFamily = 'Dancing Script';
}

document.querySelector('.btn_Fredericka').onclick = select_five;

function select_five(){
    

    x.style.fontFamily = 'Fredericka the Great';
}

document.querySelector('.btn_Creepster').onclick = select_six;

function select_six(){
    

    x.style.fontFamily = 'Creepster';
}

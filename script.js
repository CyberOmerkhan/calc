let input = document.querySelector('input');
function insert(num){
    input.value += num;
}
function back(){
    input.value = input.value.substr(0, input.value.length - 1);
}
function clean(){
    input.value = '';
}
function showResult(){
    input.value = eval(input.value);
}
let num = 0
const buttonMinus = document.getElementById('minus');
const buttonPlus = document.getElementById('plus');
const input = document.getElementById('input');

input.value = num

buttonMinus.onclick = () => {
    num-=1
    input.value = num
}
buttonPlus.onclick = () => {
    num+=1
    input.value = num
}

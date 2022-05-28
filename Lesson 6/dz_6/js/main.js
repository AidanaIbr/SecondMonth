//****************Задание 1****************
const arr1 =[1,2,3]
const arr2 =[4,5,6]
const arr3 =[7,8,9]
const arr4 =[10,11,12]
const arr5 =[13,14,15]

const array = [...arr1,...arr2,...arr3,...arr4,...arr5]
console.log(array)

//****************Задание 2****************
const obj ={
    id : 1,
    surname:"Ivanov",
    name:"Ivan",
    patronymic: "Ivanovich",
    age: 25
}
const obj2 = [{...obj,position:"Developer", education:"KSTU", address:"Bishkek"}]
console.log(obj2)

//****************Задание 3****************
const addButton = document.getElementById('button')
const input = document.getElementById('input')
const div = document.getElementById('form')

const p = document.createElement('p');
p.setAttribute('id','test');
div.append(p)

addButton.onclick = function () {
    p.innerText = `Hello, ${input.value}!`
}




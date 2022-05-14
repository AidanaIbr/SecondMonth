// function sayHello(){
//     console.log("hello")
// }
//
// sayHello();

// function  getFullName(user, age, user2) {
//     if( age <18){
//         console.log('Close')
//     }else{
//         console.log(user.last_name, user2.last_name + " " + "Open")
//     }
// }
//
// const users = {
//     first_name: 'John',
//     last_name: 'Beka',
// }
// const users2 = {
//     first_name: 'Maruf',
//     last_name: 'Atay',
// }
//
// getFullName(users, 18, users2);




///Анонимные функции
// const anonym = function () {
//     console.log(users)
// }
//
// anonym();


// function  numbers(num1,num2) {
//     if(num1>num2){
//         console.log('Первое число больше')
//     }else if (num1<num2){
//         console.log('Второе число больше')
//     }else{
//         console.log('Они равны')
//     }
// }
// const  num = {
//     num1: 5,
//     num2: 2,
// }
//
// numbers(num.num1,num.num2)
// // numbers(3,6)

// function twoMass(arr1,arr2) {
//     console.log(arr1, arr2)
//     if(arr1.length > arr2.length){
//         alert("arr1>arr2")
//     }else if(arr1.length < arr2.length){
//         alert("arr1<arr2")
//     } else {
//         alert("===")
//     }
// }
//
// const arr1=[12123,123,1232,33232]
// const arr2=[33232,43,34]
// twoMass(arr1,arr2)

// function tr() {
//     let line="*"
//     while(line.length<7){
//         console.log(line)
//         line=line + '*'
//     }
// }
//tr()

//*****************Задание 1*******************
// Сделать функцию котороя принимает 2 number аргумента
// И вычисляет какой из них меньше

function numbersFunction(num1, num2) {
	if(num1<num2){
		console.log("Число "+num1+" меньше чем "+num2);
	}else if(num1>num2){
		console.log("Число "+num2+" меньше чем "+num1);
	}else{
		console.log("Числа "+num1+" и "+num2+" равны");
	}
}
numbersFunction(5,7);


//*****************Задание 2*******************
// Написать функцию countChar
// Которая может считать длину переданной как аргумент

function countChar(temp) {
	console.log("Длина равна:"+temp.length)
}
countChar("Hello");
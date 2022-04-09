const name=prompt("Как Вас зовут?")
alert("Здравствуйте, "+name+" !")


const array1=[1,2,3,4,9];
const array2=[1,6,8,9];

if (array1.length == array2.length){
    console.log("Массивы имеют одинаковую длину!")
}else if(array1.length > array2.length){
    console.log("Длина первого массива больше чем длина второго!")
}else {
    console.log("Длина второго массива больше чем длина первого!")
}


let a = ["Red","Yellow","Green"];

for(let i=0; i<a.length;i++){
        switch (a[i]) {
      case "Red":
        alert( '"Светофор"\nStop!' );
        break;
      case "Yellow":
        alert( '"Светофор"\nReady!' );
        break;
      case "Green":
        alert( '"Светофор"\nGo!' );
        break;
      default:
        alert( "Error" );
    }
}


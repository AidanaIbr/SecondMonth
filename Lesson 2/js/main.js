const arr=[
    {
        username: 'Jack',
        full_name:'Jack Kyrgyz'
    },
    {
        username: 'Joe',
        full_name:'Joe Kyrgyz'
    },
    {
        username: 'John',
        full_name:'John Kyrgyz'
    },
]

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i].username, arr[i].full_name)
// }

// for (let user of arr){ // получаем сами элементы
//     console.log(user)
// }


// const obj={
//     key1:'b1',
//     key2:'b2',
//     key3:'b3',
//     key4:'b4',
//     key5:'b5',
//     key6:'b6',
//     key7:'b7',
//     key8:'b8',
//     key9:'b9',
//     key10:'b10',
// }

// console.log(obj.key1);
// // Для объектов
// for(let key in obj){
//     console.log(obj[key])
// }
//
// let i=0;
// while(i<5){
//     console.log("hello")
//     i++
// }

const users=[
    {
        username:'Jack',
        salary:500
    },
    {
        username:'Joe',
        salary:5000
    },
    {
        username:'Vito',
        salary:1000
    }
]
console.log(users)

const destructUsers=users.map(user=>({
          name:user.username,
          salary:user.salary
}));
console.log(destructUsers)

// const destructUsers=[];
//
// for( let user of users){
//     destructUsers.push({
//             name:user.username,
//             salary:user.salary
//     })
// }
// console.log(destructUsers)
// const filteredUsers=users.filter(user => user.salary>500);
// console.log(filteredUsers);

// for( let user of users){
//     if( user.salary>500){
//         filteredUsers.push(user)
//     }
// }
// console.log(filteredUsers);

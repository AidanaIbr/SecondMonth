const blocks = document.getElementsByClassName('block');
// console.log(blocks)
// console.log(document)

const block3 = document.getElementById('block3')
// block3.className = "changeClass"
// block3.classList.add("asd")
// block3.classList.remove("this")
// console.log(block3.classList)


block3.onclick = () => {
        block3.classList.toggle("active")
}

// const block = document.querySelector('.block')
const block = document.querySelectorAll('.block')
// console.log(block)


const button = document.getElementById('button');
const input = document.getElementById('input');

//*********Добавление элемента в body***********
// function createNewDiv() {
//         const div = document.createElement('div')
//         const deleteButton = document.createElement('button')
//         deleteButton.innerText = "delete"
//         deleteButton.onclick = (e) => {
//                 e.path[1].remove()
//         }
//         div.setAttribute('class','block')
//         div.innerText = input.value
//
//         div.append(deleteButton)
//         document.body.append(div)
//         input.value = ""
// }
// button.onclick = createNewDiv;

button.onclick = () => {
        const div = document.createElement('div')
        const deleteButton = document.createElement('button')
        deleteButton.innerText = "delete"
        deleteButton.onclick = (e) => {
                e.path[1].remove()
        }
        div.setAttribute('class','block')
        div.innerText = input.value

        div.append(deleteButton)
        document.body.append(div)
        input.value = ""
}



// button.onclick = (event) => {
//         console.log(event)
//         console.log("Clicked")
// }
//
// input.onchange = (event) => {
//         console.log(event)
//         console.log(event.target)
//         console.log(event.target.value)
// }

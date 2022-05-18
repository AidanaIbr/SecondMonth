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

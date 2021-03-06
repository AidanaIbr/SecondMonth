const list = [];
const addButton = document.getElementById('button')
const input = document.getElementById('input')

function render() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list')

    for(let i = 0; i < list.length; i++){
        const div = document.createElement("div");
        div.setAttribute('class', 'todoBlock');
        const p = document.createElement('p');
        p.setAttribute('id','test');
        p.innerText = list[i].text;
        div.append(p)

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions');
        const changeButton = document.createElement("button");
        changeButton.innerText = "change";

        changeButton.onclick = function () {
            p.innerText = input.value;
        }

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", 'delete');
        deleteButton.innerText = "delete";

        deleteButton.onclick = function () {
            div.remove()
            list.pop()
        }

        buttons.append(changeButton, deleteButton);
        div.append(buttons);
        mainDiv.append(div)
    }
    const form = document.querySelector('.form');
    document.querySelector('.list').remove();
    form.append(mainDiv)
}

addButton.onclick = function () {
    const obj = {
        id: list.length+1,
        text: input.value
    }
    list.push(obj)
    console.log(list)
    render();
};





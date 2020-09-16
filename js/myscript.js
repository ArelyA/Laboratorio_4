let btnPost = document.getElementById("btnPost");
let btnClear = document.getElementById("btnClear");
let btnMark = document.getElementById("btnMark");
let btnDelete = document.getElementById("btnDelete");

btnPost.addEventListener("click", postFunc);
btnClear.addEventListener("click", clearFunc);
btnMark.addEventListener("click", markFunc);
btnDelete.addEventListener("click", deleteFunc);

function postFunc(event) {
    event.preventDefault();

    var text = document.getElementById("text").value;
    var list = document.getElementById("list");

    let currentList = list.innerHTML;

    list.innerHTML = currentList + `<input type = "checkbox" name = "todo" /> ${text} <br>`;
}

function clearFunc(event) {
    event.preventDefault();
    
    checkFunc(false);
}

function markFunc(event) {
    event.preventDefault();

    checkFunc(true);
}

function deleteFunc(event) {
    event.preventDefault();

    var list = document.getElementById("list");

    list.innerHTML = "";
}

function checkFunc(val) {

    var listTodo = document.getElementsByName("todo");

    for(i = 0; i < listTodo.length; i++) {
        listTodo[i].checked = val;
    }
}
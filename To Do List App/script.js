let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector("#todo-list");

function addTask() {
    if (inputBox === "") {
        alert("You must write something !")
    }
    else {
        const monthList = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const date = new Date();
        const day = date.getDate();
        const monthNum = date.getMonth();
        month = monthList[monthNum];
        currentDate = `${month} ${day}`;

        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        let span2 = document.createElement("var");
        span2.innerText = currentDate;
        li.appendChild(span2)
        console.log(span2.innerText);

    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();

    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// const monthList = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec']
// const date = new Date();
// const day = date.getDate();
// const monthNum = date.getMonth();
// month = monthList[monthNum];
// currentDate = `${month} ${day}`;

// let span2 = document.createElement("span");
//         span2.innerHTML = 'currentDate';

//         console.log(span2);
let tasks = document.querySelector('.tasks-space');
let tasksArea = document.querySelector('.task-area');
let btnUpload = document.querySelector('.btn-upload');


btnUpload.addEventListener('click', function() {
    let soundCreat = document.querySelector('.sound-creat');
    soundCreat.play();

    let todoDiv = document.createElement("div");
    todoDiv.classList.add("Tasks-area");

    let checkDoubleBtn = document.createElement("button");
    checkDoubleBtn.innerHTML = `<i class="fas fa-check-double"></i>`;
    checkDoubleBtn.classList.add("btn_select");
    todoDiv.appendChild(checkDoubleBtn);

    let paragraph = document.createElement("p");
    paragraph.innerHTML = tasksArea.value;
    paragraph.setAttribute('id', 'note');
    todoDiv.appendChild(paragraph)

    let btnDelet = document.createElement("btn_delet");
    btnDelet.innerHTML = `<i class="fas fa-trash"></i>`;
    btnDelet.classList.add("btn_delet");
    todoDiv.appendChild(btnDelet);

    tasks.appendChild(todoDiv);

    todoinput.focus();
    todoinput.value = "";

    // tasksArea.replace(tasksArea.value, "");

});

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains("fa-trash")) {
        let sounddelet = document.querySelector('.sound-delet');
        sounddelet.play();
        e.target.parentElement.parentElement.classList.add("fall");

        function removeitem() {
            e.target.parentElement.parentElement.remove();
        }
        setTimeout(removeitem, 1000);
    }

    if (e.target.classList.contains("fa-check-double")) {
        e.target.parentElement.parentElement.classList.toggle("completed");
        e.target.classList.toggle("green");
        let sounddone = document.querySelector(".sound-done");
        sounddone.play();
    }
})
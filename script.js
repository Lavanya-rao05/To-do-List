const inputText = document.getElementById("input-text");
const taskList = document.getElementById("task-list");

function addTask() {
  if (inputText.value === "") {
    alert("Write Something");
  } else {
    let lists = document.createElement("li");
    lists.innerHTML = inputText.value;
    taskList.appendChild(lists);
    let span = document.createElement("span");
    span.innerHTML = "\u2716";
    lists.appendChild(span);
  }
  inputText.value = "";
  saveData();
}

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);


function saveData() {
    localStorage.setItem("data",taskList.innerHTML);

}

function showList() {
    taskList.innerHTML = localStorage.getItem("data");
}
showList();

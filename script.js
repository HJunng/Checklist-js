const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value === ''){
    alert("할일을 입력해주세요!");
  }else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);

    let edit = document.createElement("edit");
    edit.innerHTML = "\u270e";
    li.appendChild(edit);
  }
  inputBox.value='';
  saveData();
}

listContainer.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }else if(e.target.tagName === "EDIT"){
    e.target.parentElement.focus();
    e.target.parentElement.edit();
    saveData();
  }
},false);

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML); 
}

function showTasks(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
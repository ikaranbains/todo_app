const container = document.querySelector("#container");
const addTask = document.querySelector(".add");
const mainInput = document.querySelector("#mainTask");
const ul = document.querySelector(".ul");
var li;
var dynList;
var span

// Creating lists function
function createList() {
  li = document.createElement("li");
  return li;
}

// Adding Tasks
addTask.addEventListener("click", () => {
  if (mainInput.value === "") {
    alert("Write Someting!");
  } else {
    dynList = createList();
    var inputVal = mainInput.value;
    dynList.innerHTML = inputVal;
    ul.appendChild(dynList);
    span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    mainInput.value = "";
    saveData();
  }
});

mainInput.addEventListener('keypress', (event)=>{
  if(event.key === 'Enter'){
    if (mainInput.value === "") {
      alert("Write Someting!");
    } else {
      dynList = createList();
      var inputVal = mainInput.value;
      dynList.innerHTML = inputVal;
      ul.appendChild(dynList);
      span = document.createElement('span');
      span.innerHTML = '\u00d7';
      li.appendChild(span);
      mainInput.value = "";
      saveData();
    }
  }
})

// Completing tasks -- Listening event using Event Bubbling
container.addEventListener('click', (elem)=>{
  if (elem.target.tagName === 'LI'){
    elem.target.classList.toggle('checked');  // toggle works like on and off
    saveData();
  }
  else if (elem.target.tagName === 'SPAN'){
    elem.target.parentElement.remove();    // span's parent element is li
    saveData();
  }
})


// Saving the data in browser
function saveData(){
  localStorage.setItem('data', ul.innerHTML);
}

// Showing the saved data in webpage
function showData(){
  ul.innerHTML = localStorage.getItem('data');
}
showData();
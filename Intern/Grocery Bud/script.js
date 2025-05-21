
function addItem()
 {
  let input = document.getElementById("item-input");
  let list = document.getElementById("item-list");

  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  
  let span = document.createElement("span");
  span.textContent = input.value;

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = function () {
    
    list.removeChild(li);
  };
li.appendChild(span);
  li.appendChild(removeBtn);

  list.appendChild(li);
  input.value = "";
  
}

function clearList() {
  document.getElementById("item-list").innerHTML = "";
}

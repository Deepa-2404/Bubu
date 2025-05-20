
function addItem()
 {
  let input = document.getElementById("item-input");
  let list = document.getElementById("item-list");

  if (input.value === "") return;

  let li = document.createElement("li");
  li.textContent = input.value;

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = function () {
    list.remove(li);
  };

  li.textContent = ""; 
  li.append(input.value + " ", removeBtn);
  list.append(li);
  input.value = "";
}

function clearList() {
  document.getElementById("item-list").innerHTML = "";
}

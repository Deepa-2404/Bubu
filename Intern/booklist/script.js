// Selecting elements
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");
var cancelpopup = document.getElementById("Cancel-popup");

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

// Show popup on + button click
addpopupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

// Hide popup on cancel click
cancelpopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

// Add book to container
addbook.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    !booktitleinput.value.trim() ||
    !bookauthorinput.value.trim() ||
    !bookdescriptioninput.value.trim()
  ) {
    alert("Please fill all fields.");
    return;
  }

  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`;

  container.appendChild(div);

  // Clear inputs
  booktitleinput.value = "";
  bookauthorinput.value = "";
  bookdescriptioninput.value = "";

  // Hide popup
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

// Delete book function
function deletebook(event) {
  event.target.parentElement.remove();
}

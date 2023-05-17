var congratsPopup = document.getElementById("congratsPopup");
var form = document.getElementById("popupForm");
var isOptionsSelected = false;

function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
  form.reset();
  if (isOptionsSelected) {
    congratsPopup.style.display = "block";
  }
}

function submitSelection(event) {
  event.preventDefault();

  var dropdown1 = document.getElementById("dropdown1");
  var dropdown2 = document.getElementById("dropdown2");

  var selectedOptions = document.getElementById("selectedOptions");
  selectedOptions.innerHTML = "";

  if (dropdown1.value !== "" && dropdown2.value !== "") {
    selectedOptions.innerHTML += "<li>" + dropdown1.value + "</li>";
    selectedOptions.innerHTML += "<li>" + dropdown2.value + "</li>";

    isOptionsSelected = true;
  } else {
    isOptionsSelected = false;
  }

  closePopup(); // Close the form after submission
  form.reset();
}

function closeCongratsPopup() {
  congratsPopup.style.display = "none";
  form.reset();
}

form.addEventListener("submit", submitSelection);
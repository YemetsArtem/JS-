// Create DIV
var div = document.createElement("div");
div.style.display = "block";
document.body.appendChild(div);

// Create TextArea
var textarea = document.createElement("textarea");
textarea.style.display = "none";
document.body.appendChild(textarea);
textarea.setAttribute("placeholder", "Enter your text: ");

document.addEventListener("keydown", changeBlock);

// Create function that change and save changes in block
function changeBlock(event) {
  console.log(event);
  if (div.style.display === "block") {
    if (event.keyCode == 69 && event.ctrlKey) {
      div.style.display = "none";
      textarea.style.display = "block";
      textarea.focus();
      event.preventDefault();
    }
  } else {
    if ((event.keyCode == 83 && event.ctrlKey) || event.keyCode == 13) {
      div.innerHTML = textarea.value;
      textarea.value = " ";
      textarea.style.display = "none";
      div.style.display = "block";
      event.preventDefault();
    } else if (event.keyCode === 27) {
      textarea.value = " ";
      div.innerHTML = textarea.value;
      textarea.style.display = "none";
      div.style.display = "block";
      event.preventDefault();
    }
  }
}

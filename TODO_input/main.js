// Function for create elements
var createElements = tag => {
  return document.createElement(tag);
};
// Function for insert elements
var inserteElement = (parent, child) => {
  parent.appendChild(child);
};

// Create and insert static elements: result, input and button
var input = createElements("input");
var button = createElements("button");
var result = createElements("h1");
button.innerText = "+";
result.innerText = "Result :";
inserteElement(document.body, input);
inserteElement(document.body, button);
inserteElement(document.body, result);

// Function that create new text block from our input value
var addNewTextBlock = () => {
  if (input.value === " ") {
    return;
  }
  // Create and insert our "new block" elements
  var container = createElements("div");
  var paragraph = createElements("p");
  var remove = createElements("button");
  var edit = createElements("button");
  container.className = "container";
  remove.className = "delete";
  remove.innerText = "delete";
  edit.innerText = "edit";
  edit.className = "edit";
  paragraph.className = "text";
  paragraph.innerHTML = input.value;
  inserteElement(document.body, container);
  inserteElement(container, paragraph);
  inserteElement(container, remove);
  inserteElement(container, edit);

  // Delete our "new block" element after click on remove button
  remove.addEventListener("click", () => {
    container.remove();
  });

  // Change text in our "new block" element after click on edit button
  edit.addEventListener("click", () => {
    if (edit.innerText === "edit") {
      input.focus();
      edit.innerText = "save";
      if (input.value !== " ") {
        paragraph.innerHTML = input.value;
        input.value = " ";
      }
    } else {
      if (input.value !== " ") {
        edit.innerText = "edit";
        paragraph.innerHTML = input.value;
        input.value = " ";
      } else {
        edit.innerText = "edit";
      }
    }
  });

  // Assign empty string to input value
  input.value = " ";
};

button.addEventListener("click", addNewTextBlock);
input.addEventListener("keyup", event => {
  if (event.keyCode === 13) {
    addNewTextBlock(event);
    event.preventDefault();
  }
});

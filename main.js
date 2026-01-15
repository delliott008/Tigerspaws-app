const form = document.getElementById("action");
const inputField = document.getElementById("name-input");
const displayArea = document.getElementById("display-text");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = inputField.value.trim();
  
  if (name !== "") {
    const li = document.createElement("li");
    li.textContent = name;
    li.addEventListener("click", function() {
      li.remove();
    });
    displayArea.appendChild(li);
    inputField.value = "";
  }
});

function validateInput() {
  let inputField = document.getElementById("comment");
  let submitBtn = document.getElementById("submit-btn");

  if (inputField.value.trim().length > 0) {
    submitBtn.disabled = false;
    submitBtn.style.color = "blue";
  } else {
    submitBtn.disabled = true;
    submitBtn.style.color = "";
  }
}

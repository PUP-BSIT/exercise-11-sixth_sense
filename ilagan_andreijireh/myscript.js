document.addEventListener("DOMContentLoaded", function() {
  const nameInput = document.getElementById("name");
  const commentInput = document.getElementById("comment");
  const submitBtn = document.getElementById("submit-btn");

  function validateInput() {
    if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  nameInput.addEventListener("input", validateInput);
  commentInput.addEventListener("input", validateInput);
});

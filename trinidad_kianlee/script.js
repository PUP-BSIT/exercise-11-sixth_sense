function checkComment() {
  let userComment = document.getElementById("userComment");
  let commentButton = document.getElementById("comment_Button");

  if (userComment.value.trim().length > 0) {
    commentButton.disabled = false;
    commentButton.style.color = "blue";
  } else {
    commentButton.disabled = true;
    commentButton.style.color = "";
  }
}

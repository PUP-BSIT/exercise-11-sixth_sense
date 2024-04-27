function checkComment() {
  let userComment = document.getElementById("user_comment");
  let commentButton = document.getElementById("comment_button");

  if (userComment.value.trim().length > 0) {
    commentButton.disabled = false;
    commentButton.style.color = "blue";
  } else {
    commentButton.disabled = true;
    commentButton.style.color = "";
  }
}

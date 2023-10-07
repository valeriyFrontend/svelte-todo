const isPanelVisible = document.querySelector('.player--panel-visible');

if(!isPanelVisible) {
  document.querySelector("body").style.cursor = "none";
} else {
  document.querySelector("body").style.cursor = "default";
}

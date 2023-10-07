const isPanelVisible = document.querySelector('.player--panel-visible');

if(!isPanelVisible) {
  console.log(isPanelVisible, 1)
  document.querySelector("body").style.cursor = "none";
} else {
  console.log(isPanelVisible, 2)
  document.querySelector("body").style.cursor = "default";
}

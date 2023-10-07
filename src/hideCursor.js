const isPanelVisible = document.querySelector('.player--panel-visible');

const options = {
  attributes: true
}

function callback(mutationList, observer) {
  mutationList.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      if (!isPanelVisible) {
        console.log(isPanelVisible, 1);
        document.querySelector("body").style.cursor = "none";
      } else {
        console.log(isPanelVisible, 2);
        document.querySelector("body").style.cursor = "default";
      }
    }
  })
}

const observer = new MutationObserver(callback)
observer.observe(isPanelVisible, options)

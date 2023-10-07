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

function addObserverIfDesiredNodeAvailable() {
    const isPanelVisible = document.querySelector('.player--panel-visible');
    if(!isPanelVisible) {
        //The node we need does not exist yet.
        //Wait 500ms and try again
        window.setTimeout(addObserverIfDesiredNodeAvailable,500);
        return;
    }
    const observer = new MutationObserver(callback)
    observer.observe(isPanelVisible, options)
}
addObserverIfDesiredNodeAvailable();

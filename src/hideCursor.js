const options = {
  attributes: true
}

function callback(mutationList, observer) {
  const isPanelVisible = document.querySelector('.player--panel-visible');
  
  mutationList.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      if (!isPanelVisible) {
        document.body.style.setProperty('cursor', 'none');
      } else {
        document.body.style.removeProperty("cursor");
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

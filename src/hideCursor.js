// Function to handle changes in visibility
function handleVisibilityChange(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      const isPanelVisible = document.querySelector('.player--panel-visible');
      if (!isPanelVisible) {
        console.log(isPanelVisible, 1);
        document.querySelector("body").style.cursor = "none";
      } else {
        console.log(isPanelVisible, 2);
        document.querySelector("body").style.cursor = "default";
      }
    }
  }
}

// Select the element you want to observe for changes
const targetNode = document.querySelector('.player--panel-visible');

// Create a MutationObserver
const observer = new MutationObserver(handleVisibilityChange);

// Configure the observer to watch for changes in attributes
const config = { attributes: true, attributeFilter: ['class'] };

// Start observing the target node
observer.observe(targetNode, config);

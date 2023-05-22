document.getElementById("button").addEventListener("click", function() {
    document.getElementById("message").textContent = "Hello world";


chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: 'OFF'
    });
  });
  
  const extensions = 'https://developer.chrome.com/docs/extensions';
  const webstore = 'https://developer.chrome.com/docs/webstore';
  const amazon = 'https://www.amazon.com';
  const walmart = 'https://www.walmart.com/';
  
  console.log("This is a popup!");
  
  // When the user clicks on the extension action
  chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
      // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
      const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
      // Next state will always be the opposite
      const nextState = prevState === 'ON' ? 'OFF' : 'ON';
  
      // Set the action badge to the next state::before
      await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState
      });
  
      if (nextState === 'ON') {
        // Insert the CSS file when the user turns the extension on
        await chrome.scripting.insertCSS({
          files: ['focus-mode.css'],
          target: { tabId: tab.id }
        });
      } else if (nextState === 'OFF') {
        // Remove the CSS file when the user turns the extension off
        await chrome.scripting.removeCSS({
          files: ['focus-mode.css'],
          target: { tabId: tab.id }
        });
      }
    }
  });
  
  // When the user clicks on the extension action
  chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(amazon)) {
      // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
      const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
      // Next state will always be the opposite
      const nextState = prevState === 'ON' ? 'OFF' : 'ON';
  
      // Set the action badge to the next state::before
      await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState
      });
  
      if (nextState === 'ON') {
        // Insert the CSS file when the user turns the extension on
        await chrome.scripting.insertCSS({
          files: ['focus-mode.css'],
          target: { tabId: tab.id }
        });
      } else if (nextState === 'OFF') {
        // Remove the CSS file when the user turns the extension off
        await chrome.scripting.removeCSS({
          files: ['focus-mode.css'],
          target: { tabId: tab.id }
        });
      }
    }
  });
  
  // When the user clicks on the extension action
  chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(walmart)) {
      // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
      const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
      // Next state will always be the opposite
      const nextState = prevState === 'ON' ? 'OFF' : 'ON';
  
      // Set the action badge to the next state::before
      await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState
      });
  
      if (nextState === 'ON') {
        // Insert the CSS file when the user turns the extension on
        await chrome.scripting.insertCSS({
          files: ['focus-mode.css'],
          target: { tabId: tab.id }
        });
      } else if (nextState === 'OFF') {
        // Remove the CSS file when the user turns the extension off
        await chrome.scripting.removeCSS({
          files: ['focus-mode.css'],
          target: { tabId: tab.id }
        });
      }
    }
  });
  

  
  function reddenPage() {
    var element = document.getElementById("ppd");
    if(element) {
        element.style.backgroundColor = "red";
    }
    else {
        console.log("Element with id 'ppd' not found");
    }
  }
  
  chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes('chrome://')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: reddenPage
      });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: yellowPage
      });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: createSidebar
      });
  
    }
  });
  
  function yellowPage() {
    var elements = document.getElementsByClassName("a-size-base po-break-word");
      
    for(var i = 0; i < 1; i++) {
        elements[i].style.backgroundColor = "yellow";
        console.log(elements[i].innerHTML);
        var key_Element = elements[i].innerHTML;
        /*
        fetch('http://your-java-backend-endpoint', {
        method: 'POST', // or 'GET', 'PUT', etc.
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: key_Element }), // data can be `string` or {object}!
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
        */
       console.log("clpAlgorithm(" + key_Elemen + ")");
    }
  }

  function createSidebar() {
    // Create a new div element for the sidebar
    var sidebar = document.createElement("div");

    // Style the sidebar
    sidebar.style.width = '200px';
    sidebar.style.height = '100%';
    sidebar.style.position = 'fixed';
    sidebar.style.top = '0';
    sidebar.style.left = '0';
    sidebar.style.backgroundColor = blue;
    sidebar.style.padding = '10px';
    sidebar.style.boxShadow = '2px 0px 5px rgba(0, 0, 0, 0.2)';
    sidebar.style.zIndex = '1000';

    // Create a new p element for the message
    var message = document.createElement("p");
    message.textContent = "Hello World";

    // Append the message to the sidebar
    sidebar.appendChild(message);

    // Append the sidebar to the body
    document.body.appendChild(sidebar);
}


});
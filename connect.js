function myFunction() {
  // Your code here
  console.log('Window has loaded!My name is prabhat');
   const enterKeyPressEvent = new KeyboardEvent("keydown", {
    key: "Enter",
    code: "Enter",
    which: 13,
    keyCode: 13,
    charCode: 13,
    bubbles: true,
  });

  // Dispatch the event on the document element
  document.dispatchEvent(enterKeyPressEvent);
}

window.addEventListener('load', myFunction);

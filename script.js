// script.js
// Disable right-click
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
});

// Disable Ctrl+U, Ctrl+Shift+I, F12
document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && (e.key === "u" || e.key === "U" || (e.shiftKey && e.key === "I"))) {
    e.preventDefault();
  }
  if (e.key === "F12") {
    e.preventDefault();
  }
});

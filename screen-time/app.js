// app.js

// Initialize the timer
let timer = 0;
// Check if the current tab is a YouTube video page
// let save = 0
// import { myConstant } from './background.js';

function isYouTubeVideoPage() {
  return /https:\/\/www\.youtube\.com\/watch\?/.test(window.location.href);
}

// Update the timer every second
setInterval(() => {
  if (isYouTubeVideoPage()) {
    timer++;
    // localStorage.setItem('total-time', timer);
    // localStorage.setItem('savedTime', 0);
    // Send the timer value to the popup
    browser.runtime.sendMessage({ time: timer });
  }
}, 1000);

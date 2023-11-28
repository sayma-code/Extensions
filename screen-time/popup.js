// popup.js

// Get a reference to the HTML element where you want to display the time
const timeDisplay = document.getElementById('time-display');

// Listen for messages from the content script
browser.runtime.onMessage.addListener((message) => {
  if (message.time) {
    // Update the displayed time
    const formattedTime = formatTime(message.time);
    timeDisplay.textContent = `Time spent on YouTube: ${formattedTime}`;
  }
});

// Format the time in HH:MM:SS format
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

// Add leading zero if the number is less than 10
function padZero(num) {
  return num < 10 ? `0${num}` : num;
}
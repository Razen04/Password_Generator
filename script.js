const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~1234567890";

function generatePassword(length) {
  const passEl = document.getElementById("pass-el");
  const password = Array.from({length}, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  passEl.textContent = password;
  navigator.clipboard.writeText(password).then(() => showNotification("Password copied!", 2000));
}

function showNotification(message, duration) {
  const notificationContainer = document.getElementById("notification-container");
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.classList.add("custom-notification");
  notificationContainer.appendChild(notification);
  setTimeout(function () {
      notificationContainer.removeChild(notification);
  }, duration);
}

document.addEventListener("DOMContentLoaded", () => {
  const modeIcon = document.getElementById("modeIcon");
  const stylesheet = document.getElementById("stylesheet");
  const moonIcon = document.getElementById("moonIcon");
  if (stylesheet.getAttribute("href") === 'dark-mode.css') {
    modeIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
  } else {
    modeIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
  }

  const heading = document.getElementById("main-heading");
  const headingOptions = [
    "Crank out a mighty<br><span>Password 🚀</span>",
    "Forge your ultimate<br><span>Password 🔑</span>",
    "Unleash unstoppable<br><span>Password 🔥</span>",
    "Blaze through with<br><span>Password ⚡</span>"
  ];
  heading.innerHTML = headingOptions[Math.floor(Math.random() * headingOptions.length)];

  function toggleMode() {
    const currentMode = stylesheet.getAttribute("href");
    if (currentMode === 'dark-mode.css') {
        stylesheet.setAttribute('href', 'light-mode.css');
        modeIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    } else {
        stylesheet.setAttribute('href', 'dark-mode.css');
        modeIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    }
  }

  moonIcon.addEventListener("click", toggleMode);
  modeIcon.addEventListener("click", toggleMode);

  const generateButton = document.getElementById("generate-button");
  generateButton.addEventListener("click", () => generatePassword(15));
});

const allCharacters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',',
    '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']',
    '^', '_', '`', '{', '|', '}', '~', '1', '2', '2', '4', '5', '6', '7', '8', '9', '0'];
function passGenerate(length) {
    let password = ''
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * allCharacters.length)
        password += allCharacters[index]
    }
    return password;
}
function generatePassword(length) {
    let passEl = document.getElementById("pass-el");
    const password = passGenerate(length);
    passEl.textContent = password;
    copyTextToClipboard(password);
    showNotification("Password is Copied.", 2000);
}
function copyTextToClipboard(text) {
    const textArea = document.createElement("textArea");
    textArea.value = text;
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}
function showNotification(message, duration){
    const notification = document.createElement("div");
    notification.textContent = message;
    notification.classList.add("custom-notification");
    document.body.appendChild(notification);
    setTimeout(function () {
        document.body.removeChild(notification)
    }, duration);
}





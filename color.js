const heads = document.getElementById('head-1');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', randClrBg);

function randClrBg() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += getRandomHex();
    }
    heads.style.backgroundColor = hexColor;
    text.textContent = hexColor;
}

function getRandomHex() {
    return hex[Math.floor(Math.random() * hex.length)];
}

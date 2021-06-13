const button = document.querySelector("button");

const body = document.querySelector("body");

const color = ['red', 'grey', 'pink', 'green', 'blue', 'yellow', 'purple'];
body.style.backgroundColor = 'violet'

button.addEventListener('click', changeBackgroundColor)

function changeBackgroundColor() {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex]
}
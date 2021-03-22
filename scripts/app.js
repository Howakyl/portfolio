let i = 0;
let intro = document.getElementById('typeOutName');
let text = 'yle oward'
let speed = 150;
let spanK = document.createElement('span')
let spanH = document.createElement('span')
let spanP = document.createElement('span')
// let typeSpan = document.createElement('span')
// typeSpan.setAttribute('id', 'cursor')
// typeSpan.innerHTML = '_'
spanP.setAttribute('class', 'h1-period')
spanP.innerHTML = '.'
spanK.innerHTML = 'K'
spanH.innerHTML = 'H'

function typeWriter () {
  if (i < text.length) {
    if (i === 0) {
      intro.appendChild(spanK)
    }
    if (i === 4) {
      intro.innerHTML += ' '
      intro.appendChild(spanH)
    }
    intro.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i === text.length) {
    intro.appendChild(spanP)
    intro.appendChild(typeSpan)
  }
}
// intro.remove(typeSpan)
typeWriter()

// let cursor = true;
// let cursorSpeed = 300;
// setInterval(() => {
//   if (cursor) {
//     document.getElementById('cursor').style.opacity = 0;
//     cursor = false;
//   } else {
//     document.getElementById('cursor').style.opacity = 1;
//     cursor = true;
//   }
// }, cursorSpeed);
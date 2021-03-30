let i = 0;
let intro = document.getElementById('typeOutName');
let text = 'yle oward'
let speed = 150;
let spanK = document.createElement('span')
let spanH = document.createElement('span')
let spanP = document.createElement('span')
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
  }
}
typeWriter()


//// Blinking Cursor ////
let typeText = document.querySelector('.typeText');
let textToBeTyped = ['Software Engineer', 'Full-Stack Web Developer', 'Problem Solver'];
let index = 0, isAdding = true, textIndex = 0

function playAnimation() {
  setTimeout(() => {
    typeText.innerText = textToBeTyped[textIndex].slice(0, index)
    if (isAdding) {
      if (index > textToBeTyped[textIndex].length) {
        // no more text to add
        isAdding = false;
        // wait 2 seconds before playing again
        typeText.classList.add('showAnim')
        setTimeout(() => {
          typeText.classList.remove('showAnim')
          playAnimation()
        }, 2000)
        return;
      } else {
        index++;
      }
    } else {
      // remove text
      if (index === 0) {
        // no more text to remove
        isAdding = true;
        textIndex = (textIndex + 1) % textToBeTyped.length;
      } else {
        index --;
      }
    }
    // playAnimation calls itself every 120ms
    playAnimation()
  }, isAdding ? 120: 60)
}

playAnimation();


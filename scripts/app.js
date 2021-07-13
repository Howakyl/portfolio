
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


// NIGHT THEME OPTIONS //

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const themeIcon = document.querySelector('.theme-icon');
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.removeAttribute('class');
        themeIcon.setAttribute('class', 'fas fa-sun')
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.removeAttribute('class');
        themeIcon.setAttribute('class', 'fas fa-moon')
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
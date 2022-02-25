const removeTransition = (e)  => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop function from running 

    key.classList.add('playing');
    //rewind to start 
    audio.currentTime = 0; 
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
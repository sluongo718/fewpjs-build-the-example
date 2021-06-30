// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('#modal');
const modalMessage = document.querySelector('#model-message')
const hearts = document.querySelectorAll('.like-glyph')
modal.className = 'hidden';

hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (heart.innerText === EMPTY_HEART) {
          heart.className = 'activated-heart'
          heart.innerText = 'Full_HEART'
        } else {
          heart.classList.remove('activated-heart');
          heart.innerText = 'EMPTY_HEART';
        }
      }) .catch(error => {
        modal.classList.remove('hidden');
        modalMessage.innerText = error
        setTimeout(() => { module.className = "hidden" }, 3000);
      });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

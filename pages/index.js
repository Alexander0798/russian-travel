const buttonLenght = Array.from(document.querySelectorAll('.header__button'))
const languageEn = document.querySelectorAll('#en')

// подчёркнуть активный язык
const underlineActive = (arr) => {
  arr.forEach((el) => {
    el.addEventListener('click', (evt) => {
      evt.preventDefault();
      arr.forEach((nl) => {
        if (nl !== this) {
          nl.classList.remove('header__button_active');
      }
      })
      el.classList.add('header__button_active');
    }, false);
  });
}

underlineActive(buttonLenght)


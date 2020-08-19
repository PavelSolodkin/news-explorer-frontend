import '../css/index.css';

const popupSignin = document.querySelector('#popup-signin');
const popupSignup = document.querySelector('#popup-signup');
const popupSuccess = document.querySelector('#popup-success')

const close = document.querySelector('#close');
const close2 = document.querySelector('#close2');
const close3 = document.querySelector('#close3');
const close4 = document.querySelector('#close4');

const authorization = document.querySelector('#authorization');
const registration = document.querySelector('#registration');
const success = document.querySelector('#success');

const changeButton = document.querySelector('#changeButton');
const greta = document.querySelector('#greta');
const saves = document.querySelector('#saves');

const openMenu = document.querySelector('#openMenu');

authorization.addEventListener('click', () => {
  popupSignin.classList.add('popup_type_visible');
});

registration.addEventListener('click', () => {
  popupSignin.classList.remove('popup_type_visible');
  popupSignup.classList.add('popup2_type_visible');
});

success.addEventListener('click', () => {
  popupSignup.classList.remove('popup2_type_visible');
  popupSuccess.classList.add('popup3_type_visible');
});

close.addEventListener('click', () => {
  popupSignin.classList.remove('popup_type_visible');
});

close2.addEventListener('click', () => {
  popupSignup.classList.remove('popup2_type_visible');
});

close3.addEventListener('click', () => {
  popupSuccess.classList.remove('popup3_type_visible');
});

changeButton.addEventListener('click', () => {
  popupSuccess.classList.remove('popup3_type_visible');
  authorization.classList.add('button_type_author_invisible');
  greta.classList.add('button_type_greta_light_visible');
  saves.classList.add('news__item_type_invisible_visible');
});

greta.addEventListener('click', () => {
  authorization.classList.remove('button_type_author_invisible');
  greta.classList.remove('button_type_greta_light_visible');
  saves.classList.remove('news__item_type_invisible_visible');
});

openMenu.addEventListener('click', () => {
  menu.classList.add('menu_type_visible');
});

close4.addEventListener('click', () => {
  menu.classList.remove('menu_type_visible');
});
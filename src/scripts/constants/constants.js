/* Текст ошибок валидации */
const validationErrors = {
  Empty: "Это обязательное поле",
  LongShortPass: "Минимальная длина пароля - 2 символа",
  LongShortName: "Минимальная длина имени - 2 символа",
  NoEmail: "Неверный формат Email",
};

/* Адрес */
const apiOption = {
  baseUrl: 'https://api.psolodkindiplom.tk',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
};

/* Токен */
const token = localStorage.getItem('token');

/* Формы регистрации и авторизации */
const formSignin = document.forms.signin;
const formSignup = document.forms.signup;


/* Ошибки валидации авторизации */
const errorEmail = document.querySelector("#error-email");
const errorPassword = document.querySelector("#error-password");

/* Такой пользователь уже есть! и Неверно! */
const errorSignin = document.querySelector("#error-signin");
const errorSignup = document.querySelector("#error-signup");

/* Кнопка регистрации и авторизации */
const buttonEnter = document.querySelector("#submit");

/* Попапы */
const popupSignin = document.querySelector('#popup-signin');
const popupSignup = document.querySelector('#popup-signup');
const popupSuccess = document.querySelector('#popup-success');
const popupMenu = document.querySelector('#popup-menu');

/* Кнопки открытия попапов и меню */
const authorization = document.querySelector('#authorization');
const authorizationAnother = document.querySelector('#authorization-another');
const authorizationMenu = document.querySelector('#menu-authorization');
const registration = document.querySelector('#registration');
const successSignin = document.querySelector('#success-signin');
const menu = document.querySelector('#openMenu');

/* Кнопки закрытия попапов и меню */
const close = document.querySelector('#close');
const close2 = document.querySelector('#close2');
const close3 = document.querySelector('#close3');
const close4 = document.querySelector('#close4');

/* Выход */
const logout = document.querySelector('#greta');
const logoutMenu = document.querySelector('#menu-greta');

/* Сохраненные статьи */
const saves = document.querySelector('#saves');
const greta = document.querySelector('#greta');
const savesMenu = document.querySelector('#menu-saves');
const gretaMenu = document.querySelector('#menu-greta');

/* Имя пользователя */
const newsName = document.querySelector('#news-name');
const menuName = document.querySelector('#menu-name');
const savesName = document.querySelector('#saves-name');

/* Поиск */
const buttonSearch = document.querySelector('#search');
const inputField = document.querySelector('#input-field');

/* Результаты */
const results = document.querySelector('#results');
const loader = document.querySelector("#loader");
const nothing = document.querySelector("#nothing");
const cards = document.querySelector("#cards");
const more = document.querySelector('#more')



export {
  validationErrors, apiOption, token, popupSignin, popupSignup, popupSuccess, popupMenu, formSignin, formSignup, errorEmail, errorPassword, buttonEnter, errorSignin, errorSignup,
  authorization, authorizationMenu, registration, authorizationAnother, successSignin, menu, logout, logoutMenu, buttonSearch, inputField,
  close, close2, close3, close4, saves, greta, savesMenu, gretaMenu, newsName, menuName, savesName, results, loader, nothing, cards, more
}


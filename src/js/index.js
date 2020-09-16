/* Импорты */
import '../css/index.css';

import Popup from "../scripts/components/Popup/Popup.js";
import Form from "../scripts/components/Form/Form.js";
import Header from "../scripts/components/Header/Header.js";
import MainApi from "../scripts/api/MainApi/MainApi.js";
import NewsApi from "../scripts/api/NewsApi/NewsApi.js";
import NewsCard from "../scripts/components/NewsCard/NewsCard.js";
import NewsCardList from '../scripts/components/NewsCardList/NewsCardList.js';

import {
  apiOption, token, popupSignin, popupSignup, popupSuccess, formSignin, formSignup, errorEmail, errorPassword, buttonEnter, errorSignin, errorSignup,
  authorization, authorizationMenu, registration, authorizationAnother, successSignin, menu, logout, logoutMenu, buttonSearch, inputField, close, close2, close3, close4,
  results, loader, nothing, cards, more
} from "../scripts/constants/constants.js";

/* Константы и переменные */
const popup = new Popup();
const signinValidator = new Form(formSignin);
const signupValidator = new Form(formSignup);
const header = new Header();
const mainApi = new MainApi(apiOption);
const newsApi = new NewsApi();

const newsCardList = new NewsCardList(results);

const { email, password } = formSignin.elements;

let cardsArray;
let threeCards = 3;

/* Попапы */
authorization.addEventListener("click", popup.open);
authorizationMenu.addEventListener("click", popup.open);
authorizationAnother.addEventListener("click", popup.open);
registration.addEventListener("click", popup.open);
successSignin.addEventListener("click", popup.open);
menu.addEventListener("click", popup.open);

close.addEventListener('click', popup.close);
close2.addEventListener('click', popup.close);
close3.addEventListener('click', popup.close);
close4.addEventListener('click', popup.close);

/* Валидация */
signupValidator.setEventListeners();
signinValidator.setEventListeners();

/* Сброс ошибок авторизации */
function resetError() {
  errorEmail.textContent = "";
  errorPassword.textContent = "";

  email.value = "";
  password.value = "";

  buttonEnter.setAttribute("disabled", true);
  buttonEnter.classList.remove("button_type_enter_active");
  buttonEnter.classList.add("button_type_enter");
}

authorization.addEventListener("click", resetError);
successSignin.addEventListener("click", resetError);
authorizationMenu.addEventListener("click", resetError);

/* Регистрация */
formSignup.addEventListener('submit', () => {
  event.preventDefault();
  const inputName = formSignup.elements.name.value;
  const inputPassword = formSignup.elements.password.value;
  const inputEmail = formSignup.elements.email.value;

  mainApi.signup(inputName, inputEmail, inputPassword,)
    .then((res) => {
      if (!res) {
        errorSignup.classList.remove('popup__error_invisible');
      } else {
        popupSignup.classList.remove('popup2_type_visible');
        popupSuccess.classList.add('popup3_type_visible');
      }
    })
    .catch((err) => console.log(err));
});

/* Авторизация */
formSignin.addEventListener('submit', () => {
  event.preventDefault();
  const inputPassword = formSignin.elements.password.value;
  const inputEmail = formSignin.elements.email.value;

  mainApi.signin(inputEmail, inputPassword)

    .then((res) => {
      if (!res) {
        errorSignin.classList.remove('popup__error_invisible');
      } else {
        popupSignin.classList.remove('popup_type_visible');
      }
      localStorage.setItem('token', res.token);
      location.reload();
    })

    .then(() => {
      mainApi.getUserData()
        .then(() => {
          token
        })
    })
    .catch((err) => console.log(err));
})

/* Проверка авторизации */
if (token) {
  mainApi.getUserData().then((res) => {
    header.loggedIn(res.name);
  })
} else {
  header.unauthorized();
}

/* Выход */
logout.addEventListener('click', () => {
  header.unauthorized();
  localStorage.clear();
  location.reload();
});

logoutMenu.addEventListener('click', () => {
  header.unauthorized();
  localStorage.clear();
  location.reload();
});

/* Очистка результатов поиска */
function clearNewsBlock() {
  results.innerHTML = '';
}

/* Рендер новостей */
function renderCards(array, item) {

  if (array.length < item) {
    item = array.length;
  }
  let i = 0;
  while (i < item) {
    if (array[i].title && array[i].description && array[i].publishedAt && array[i].source.name && array[i].url && array[i].urlToImage) {
      const card = new NewsCard(array[i].title, array[i].description, array[i].publishedAt, array[i].source.name, array[i].url, array[i].urlToImage, mainApi, inputField.value);
      newsCardList.addCard(card.createCard());
      i++;
    }
  }
}

/* Запрос новости */
buttonSearch.addEventListener('click', (event) => {
  event.preventDefault();
  more.classList.remove('button_type_more_invisible');

  const keyword = inputField.value;
  if (!keyword) {
    inputField.placeholder = 'Нужно ввести ключевое слово';
  } else {

    cardsArray = [];
    threeCards = 3;

    clearNewsBlock();
    newsCardList.renderLoader('loading');
    nothing.classList.add('nothing_type_invisible');

    newsApi.getNews(keyword)
      .then((res) => {
        if (res.totalResults === 0) {
          loader.classList.add('loader_type_invisible');
          nothing.classList.remove('nothing_type_invisible');
          cards.classList.add('cards_type_invisible');
        } else if (res.totalResults > 0) {
          res.articles.forEach((element) => {
            if (element.title && element.description && element.publishedAt && element.source.name && element.url && element.urlToImage) {
              cardsArray.push(element);
            }
          });
          newsCardList.renderNews();
          renderCards(cardsArray, threeCards);
          loader.classList.add('loader_type_invisible');
        }
      })
      .catch((err) => console.log(err));
  }
})

/* Показать ещё */
function buttonMoreInvisible(more, resArr) {
  const renderedCards = document.querySelectorAll('.cards-item');
  if (renderedCards.length == resArr.length) {
    more.classList.add('button_type_more_invisible');
  }
}

more.addEventListener('click', (event) => {
  clearNewsBlock();
  threeCards = threeCards + 3;
  renderCards(cardsArray, threeCards);
  buttonMoreInvisible(event.target, cardsArray);
});

/* Всплытие при неавторизованном сохранении */
newsCardList.saveCheckbox();



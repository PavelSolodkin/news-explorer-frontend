/* Импорты */
import '../../css/articles.css';

import Popup from "../../scripts/components/Popup/Popup.js";
import Header from "../../scripts/components/Header/Header.js";
import MainApi from "../../scripts/api/MainApi/MainApi.js";
import NewsCard from "../../scripts/components/NewsCard/NewsCard.js";
import NewsCardList from '../../scripts/components/NewsCardList/NewsCardList';

import {
  apiOption, menu, logout, logoutMenu, close4, token, results
} from "../../scripts/constants/constants.js";

/* Константы и переменные*/
const popup = new Popup();
const header = new Header();
const mainApi = new MainApi(apiOption);
const newsCardList = new NewsCardList(results);

/* Попапы */
menu.addEventListener("click", popup.open);
close4.addEventListener('click', popup.close);

/* Выход */
logout.addEventListener('click', () => {
  localStorage.clear();
  window.location.href = './index.html';
});

logoutMenu.addEventListener('click', () => {
  localStorage.clear();
  window.location.href = './index.html';
});

/* Рендер количества сохранённых статей */
function numberCards(array) {

  const keywordsList = [];

  array.forEach((element) => {
    if (!keywordsList.includes(element.keyword)) {
      keywordsList.push(element.keyword);
    }
  });

  const number = keywordsList.length - 2;
  const keywordName = `${keywordsList[0]}, ${keywordsList[1]}`;

  const quantity = document.querySelector('#savestext');
  const label = document.querySelector('.saves');

  if (keywordsList.length == 0) {
    quantity.insertAdjacentHTML(
      'beforeend',
      `<p class="saves__number">, у вас нет</p>`
    );

    label.insertAdjacentHTML(
      'beforeend',
      `<p class="saves__save">сохранённых статей</p>`
    );
  }

  if (keywordsList.length == 1) {
    quantity.insertAdjacentHTML(
      'beforeend',
      `<p class="saves__number">, у вас ${array.length}</p>`
    );

    label.insertAdjacentHTML(
      'beforeend',
      `<p class="saves__save">сохранённая статья</p>
  <p class="saves__words">По ключевому слову: <span class="saves__words saves__words_type_bold">${keywordsList[0]}`
    );
  }
  else if (keywordsList.length > 1) {
    quantity.insertAdjacentHTML(
      'beforeend',
      `<p class="saves__number">, у вас ${array.length}</p>`
    );

    label.insertAdjacentHTML(
      'beforeend',
      `<p class="saves__save">сохранённых статей</p>
  <p class="saves__words">По ключевым словам: <span class="saves__words saves__words_type_bold">${keywordName} и ${number} другим`
    );
  }
}

/* Рендер сохранённых статей */
function renderCards(array) {
  let i = 0;
  while (i < array.length) {
    const card = new NewsCard(array[i].title, array[i].text, array[i].date, array[i].source, array[i].link, array[i].image, mainApi, array[i].keyword, array[i]._id);
    newsCardList.addCard(card.saveCard());
    i++;
  }
}

/* Проверка токена для дальнейших действий */
if (token) {
  mainApi.getUserData().then((res) => {
    header.loggedInSaves(res.name);
  })

  mainApi.getArticles().then((res) => {
    numberCards(res.articles);
    renderCards(res.articles);
  })
} else {
  header.unauthorized();
}

/* Слушатель всплывашек при удалении статей */
newsCardList.removeCheckbox();
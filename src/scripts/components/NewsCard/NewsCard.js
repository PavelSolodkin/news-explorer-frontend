import dateFormat from '../../utils/dateFormat';
import { token } from '../../constants/constants.js';

export default class NewsCard {
  constructor(title, description, date, source, url, image, api, keyword, id) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.source = source;
    this.url = url;
    this.image = image;
    this.api = api;
    this.keyword = keyword;
    this.id = id;
    this.card = document.createElement('div');
    this.removeCard = this.removeCard.bind(this);
    this.hoverYes = this.hoverYes.bind(this);
    this.hoverNo = this.hoverNo.bind(this);
    this.save = this.save.bind(this);
    this.hoverRemoveYes = this.hoverRemoveYes.bind(this);
    this.hoverRemoveNo = this.hoverRemoveNo.bind(this);

  }

  /* Создание карты-новости */
  createCard() {
    const newsDate = dateFormat.dateFormat(new Date(this.date));
    this.card.classList.add('cards-item');
    this.card.insertAdjacentHTML(
      "beforeend", `<img src="${this.image}" class="cards__image" alt="Изображение статьи" />
      <div class="cards__texts">
        <p class="cards__date">${newsDate}</p>
        <div class="cards__main">
          <p class="cards__title">${this.title}</p>
          <ol class="cards__text">${this.description}</ol>
        </div>
      </div>
      <address href=${this.url} class="cards__news">${this.source}</address>
      <p class="cards__login cards__login_type_invisible">Войдите, чтобы сохранять статьи</p>
      <button class="cards__icone"></button>`);

    this.card.addEventListener("mouseover", this.hoverYes);
    this.card.addEventListener("mouseout", this.hoverNo);
    this.card.addEventListener('click', this.save);

    return this.card;
  }

  /* Создание сохранённой карты-новости */
  saveCard() {
    const newsDate = dateFormat.dateFormat(new Date(this.date));
    this.card.classList.add('cards-item');
    this.card.insertAdjacentHTML(
      "beforeend", `<img src="${this.image}" class="cards__image" alt="Изображение статьи" />
      <div class="cards__texts">
        <p class="cards__date">${newsDate}</p>
        <div class="cards__main">
          <p class="cards__title">${this.title}</p>
          <ol class="cards__text">${this.description}</ol>
        </div>
      </div>
      <address href=${this.url} class="cards__news">${this.source}</address>
      <p class="cards__word">${this.keyword}</p>
      <p class="cards__login_type_save cards__login_type_save_type_invisible">Убрать из сохраненных</p>
      <button class="cards__icone_type_trash"></button>`);

    this.card.addEventListener("mouseover", this.hoverRemoveYes);
    this.card.addEventListener("mouseout", this.hoverRemoveNo);
    this.card.addEventListener('click', this.removeCard);

    return this.card;
  }

  /* Удаление карты-новости */
  removeCard(event) {
    if (event.target.classList.contains('cards__icone_type_trash')) {
      this.api.removeArticle(this.id)
        .then(this.card.remove());
    }
  }

  /* Наведение на иконку флажка */
  hoverYes(event) {
    if (token) {
      if (event.target.classList.contains("cards__icone")) {
        event.target.classList.remove("cards__icone");
        event.target.classList.add("cards__icone_type_hover");
      }
    }
  }

  /* Снятие наведения на иконку флажка */
  hoverNo(event) {
    if (token) {
      if (event.target.classList.contains("cards__icone_type_hover")) {
        event.target.classList.remove("cards__icone_type_hover");
        event.target.classList.add("cards__icone");
      }
    }
  }

  /* Сохранение карты-новости */
  save(event) {
    if (token) {
      if (event.target.classList.contains("cards__icone_type_hover")) {
        this.api.createArticle(this.keyword, this.title, this.description, this.date, this.source, this.url, this.image)
        event.target.classList.remove("cards__icone_type_hover");
        event.target.classList.add("cards__icone_type_marked");
      }
    }
  }

  /* Наведение на иконку урны */
  hoverRemoveYes(event) {
    if (event.target.classList.contains("cards__icone_type_trash")) {
      const trash = document.querySelector(".cards__login_type_save")
      trash.classList.remove("cards__login_type_save_type_invisible");
    }
  }

  /* Снятие наведения на иконку урны */
  hoverRemoveNo(event) {
    if (event.target.classList.contains("cards__icone_type_trash")) {
      const trash = document.querySelector(".cards__login_type_save")
      trash.classList.add("cards__login_type_save_type_invisible");
    }
  }
}


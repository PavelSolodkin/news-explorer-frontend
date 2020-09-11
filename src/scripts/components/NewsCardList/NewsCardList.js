import { cards, loader, results, token } from "../../constants/constants.js";

export default class NewsCardList {
  constructor(container) {
    this.container = container;
  }

  renderNews() {
    cards.classList.remove('cards_type_invisible');
  }

  renderLoader(result) {
    if (result === 'loading') {
      loader.classList.remove('loader_type_invisible');
    }
  }

  addCard(card) {
    this.container.appendChild(card);
  }

  saveCheckbox() {
    if (!token) {
      results.addEventListener('mouseover', (event) => {
        event.preventDefault();
        if (event.target.className === 'cards__icone') {
          event.target.previousElementSibling.style.display = 'flex';
        }
      });
    }

    if (!token) {
      results.addEventListener('mouseout', (event) => {
        event.preventDefault();
        if (event.target.className === 'cards__icone') {
          event.target.previousElementSibling.style.display = 'none';
        }
      });
    }
  }

  removeCheckbox() {
    results.addEventListener('mouseover', (event) => {
      event.preventDefault();
      if (event.target.className === 'cards__icone_type_trash') {
        event.target.previousElementSibling.style.display = 'flex';
      }
    });

    results.addEventListener('mouseout', (event) => {
      event.preventDefault();
      if (event.target.className === 'cards__icone_type_trash') {
        event.target.previousElementSibling.style.display = 'none';
      }
    });
  }
}

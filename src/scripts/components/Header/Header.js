import { authorization, saves, greta, authorizationMenu, savesMenu, gretaMenu, newsName, menuName, savesName } from "../../constants/constants";

export default class Header {

  constructor() {
    this.authorization = authorization;
    this.saves = saves;
    this.greta = greta;

    this.authorizationMenu = authorizationMenu;
    this.savesMenu = savesMenu;
    this.gretaMenu = gretaMenu;

    this.newsName = newsName;
    this.menuName = menuName;
    this.savesName = savesName;
  }

  /* Рендер новостей */
  loggedIn(name) {
    this.authorization.classList.add('button_type_author_invisible');
    this.saves.classList.add('news__item_type_invisible_visible');
    this.greta.classList.add('button_type_greta_light_visible');
    this.newsName.textContent = name;

    this.authorizationMenu.classList.add('button_type_author_invisible');
    this.savesMenu.classList.add('menu__item_type_invisible_visible');
    this.gretaMenu.classList.add('button_type_menu_greta_light_visible');
    this.menuName.textContent = name;
  }

  /* Если нет */
  unauthorized() {
    this.authorization.classList.remove('button_type_author_invisible');
    this.saves.classList.remove('news__item_type_invisible_visible');
    this.greta.classList.remove('button_type_greta_light_visible');

    this.authorizationMenu.classList.remove('button_type_author_invisible');
    this.savesMenu.classList.remove('menu__item_type_invisible_visible');
    this.gretaMenu.classList.remove('button_type_menu_greta_light_visible');
  }

  /* Простановка имени авторизовавшегося */
  loggedInSaves(name) {
    this.authorizationMenu.classList.add('button_type_author_invisible');
    this.savesMenu.classList.add('menu__item_type_invisible_visible');
    this.gretaMenu.classList.add('button_type_menu_greta_light_visible');

    this.newsName.textContent = name;
    this.menuName.textContent = name;
    this.savesName.textContent = name
  }
}

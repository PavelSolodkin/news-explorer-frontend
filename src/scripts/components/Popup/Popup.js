import { popupSignin, popupSignup, popupSuccess, popupMenu, errorSignin } from "../../constants/constants";

export default class Popup {
  constructor() {
  }

  /* Открытие попапов */
  open(event) {
    event.preventDefault();

    if (event.target.classList.contains('button_type_author')) {
      popupSignin.classList.add('popup_type_visible');
      errorSignin.classList.add('popup__error_invisible');
    }

    else if (event.target.classList.contains('popup__link')) {
      popupSignin.classList.remove('popup_type_visible');
      popupSignup.classList.add('popup2_type_visible');
    }

    else if (event.target.classList.contains('popup__link2')) {
      popupSignup.classList.remove('popup2_type_visible');
      popupSignin.classList.add('popup_type_visible');
    }

    else if (event.target.classList.contains('popup__link3')) {
      popupSuccess.classList.remove('popup3_type_visible');
      popupSignin.classList.add('popup_type_visible');
    }

    else if (event.target.classList.contains('button__icon_type_menu')) {
      popupMenu.classList.add('menu_type_visible');
    }

    else if (event.target.classList.contains('button_type_darkauthor')) {
      popupMenu.classList.remove('menu_type_visible');
      popupSignin.classList.add('popup_type_visible');
    }
  }

  /* Закрытие попапов */
  close(event) {
    event.preventDefault();

    if (event.target.classList.contains('popup__close')) {
      popupSignin.classList.remove('popup_type_visible');
    }

    else if (event.target.classList.contains('popup__close2')) {
      popupSignup.classList.remove('popup2_type_visible');
    }

    else if (event.target.classList.contains('popup__close3')) {
      popupSuccess.classList.remove('popup3_type_visible');
    }

    else if (event.target.classList.contains('menu__close')) {
      popupMenu.classList.remove('menu_type_visible');
    }
  }
}


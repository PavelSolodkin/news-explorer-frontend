# news-explorer-frontend
Frontend of diplom (Js)

## О проекте:
Работа выполнена по предоставленному ТЗ и макету. Реализована регистрация и авторизация, поиск новостей по ключевым словам с использованием стороннего API News, а также сохраненние и удаление найденных новостей-карточек.

## Функционал:
1. Нажмите на Авторизоваться, чтобы войти.
2. Перейдите по кнопке Зарегистрироваться для этого действия.
3. По окончанию авторизации увидите сообщение об успехе.
4. Нажав подсвеченную кнопку, можно снова перейти к авторизации.
5. Введя слово в поисковую строку и нажав Искать, получите массив новостей-карточек.
6. Нажав на флажок, сохраните новость для себя на второй странице.
7. Если вы не авторизованы, то сайт напомнит вам об этом при сохранении статьи.
8. Нажмите на Сохраненные статьи в изменённом хедере, чтобы перейти на 2 страницу.
9. Если сохраненных статей нет, вы вернётесь на главную.
10. Если есть, вы можете удалить ненужные, щелкнув по значку Урны.
11. При небольшом разрешении экрана кликните на кнопку всплывающего меню, чтобы увидеть функционал хедера.
12. Нажмите на кнопку Выхода на любой странице и при любом разрешении, чтобы вернуть сайт в исходное положение.

## Технологии:
JavaScript(ES6+), HTML5, CSS3, API, GIT, Webpack, JSON;

## Развертывание:
1. Клонировать репозиторий командой git clone
2. Установить пакеты npm i
3. Запустить необходимую сборку:
- npm run build - создает сборку Production
- npm run dev - создает сборку Development, запускает сервер, и открывает проект в браузере с hot обновлением

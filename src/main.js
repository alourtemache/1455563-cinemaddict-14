import {createSiteMenuTemplate} from './view/site-menu.js';
import {createMovieCard} from './view/movie-card.js';
import {createShowMoreButton} from './view/button-show-more.js';
import {createMoreInfo} from './view/more-info.js';
import {createProfileRating} from './view/profile-rating.js';
import {createFilmList} from './view/film-list';

const CARD_COUNT = 5;
const TOP_RATED = 2;
const MOST_COMMENTED = 2;

//Ставим HTML-код в указанное место
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

render(siteMainElement, createSiteMenuTemplate(), 'beforeend');
render(siteMainElement, createMoreInfo(), 'beforeend');
render(siteHeaderElement, createProfileRating(), 'beforeend');
render(siteMainElement, createFilmList(), 'beforeend');

const filmCardElement = siteMainElement.querySelector('.film-list__container');
const movieCard = filmCardElement.querySelector('.film-card');


for (let i = 0; i < CARD_COUNT; i++) {
  render(movieCard, createMovieCard(), 'beforeend');
}
for (let i = 0; i < TOP_RATED; i++) {
  render(movieCard, createMovieCard(), 'beforeend');
}
for (let i = 0; i < MOST_COMMENTED; i++) {
  render(movieCard, createMovieCard(), 'beforeend');
}

//Кнопка
render(filmCardElement, createShowMoreButton(), 'beforeend');

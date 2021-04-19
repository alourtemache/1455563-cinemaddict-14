import {createSiteMenuTemplate} from './view/site-menu.js';
import {createMovieCard} from './view/movie-card.js';
import {createShowMoreButton} from './view/button-show-more.js';
import {createMoreInfo} from './view/more-info.js';
import {createProfileRating} from './view/profile-rating.js';
import {createFilmList} from './view/film-list';

const CARD_COUNT = 5;
const TOP_RATED = 2;
const MOST_COMMENTED = 2;

// Ставим HTML-код в указанное место
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const bodyElement = document.querySelector('body');
const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

render(siteMainElement, createSiteMenuTemplate(), 'beforeend');
render(siteMainElement, createMoreInfo(), 'beforeend');
render(siteMainElement, createFilmList(), 'beforeend');
render(siteHeaderElement, createProfileRating(), 'beforeend');

const filmListElement = siteMainElement.querySelector('.films-list__container');
const filmListTopRatedElement = siteMainElement.querySelector('.films-list__top-rated .films-list__container');
const filmListMostCommentedElement = siteMainElement.querySelector('.films-list__most-commented .films-list__container');

for (let i = 0; i < CARD_COUNT; i++) {
  render(filmListElement, createMovieCard(), 'beforeend');
}

// Кнопка
render(filmListElement, createShowMoreButton(), 'beforeend');

for (let i = 0; i < TOP_RATED; i++) {
  render(filmListTopRatedElement, createMovieCard(), 'beforeend');
}
for (let i = 0; i < MOST_COMMENTED; i++) {
  render(filmListMostCommentedElement, createMovieCard(), 'beforeend');
}

render(bodyElement, createShowMoreButton(), 'beforeend');

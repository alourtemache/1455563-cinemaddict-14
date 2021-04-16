import {createSiteMenuTemplate} from './view/site-menu.js';
import {createMovieCard} from './view/movie-card.js';
import {createShowMoreButton} from './view/button-show-more.js';
import {createMoreInfo} from './view/more-info.js';
import {createProfileRating} from './view/profile-rating.js';

const CARD_COUNT = 5;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = siteMainElement.querySelector('.header');

render(siteHeaderElement, createSiteMenuTemplate(), 'beforeend');
render(siteHeaderElement, createMoreInfo(), 'beforeend');
render(siteHeaderElement, createProfileRating(), 'beforeend');

const filmCardElement = siteMainElement.querySelector('.film-list');
const movieCard = filmCardElement.querySelector('.film-list__container');

render(movieCard, createMovieCard(), 'beforeend');

const renderCard = (n, place) => {
  for (let i = 0; i < CARD_COUNT; i++) {
    render(movieCard, createMovieCard(), 'beforeend');
  }
}

render(filmCardElement, createShowMoreButton(), 'beforeend');

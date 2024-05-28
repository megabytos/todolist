import './style.css';
import { submitHandler, clickFilterHandler, clickItemHandler } from './handlers';
import createMarkUp from './draw';


export const KEY = 'todo list';
export const todoList = JSON.parse(localStorage.getItem(KEY)) ?? [];

export const selectors = {
  form: document.querySelector('.js-add-task'),
  list: document.querySelector('.js-list'),
  filters: document.querySelector('.js-options-status'),
};

selectors.list.insertAdjacentHTML('beforeend', createMarkUp(todoList));

selectors.form.addEventListener('submit', submitHandler);

selectors.list.addEventListener('click', clickItemHandler);

selectors.filters.addEventListener('click', clickFilterHandler);

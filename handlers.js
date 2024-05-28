import { todoList, selectors, KEY } from './main';
import filteredList from './filter';
import createMarkUp from './draw';

export function submitHandler(e) {
  e.preventDefault();
  const obj = {};
  const form = new FormData(e.currentTarget).forEach((value, key) => (obj[key] = value));
  obj.id = Date.now();
  todoList.push(obj);
  localStorage.setItem(KEY, JSON.stringify(todoList));
  selectors.list.innerHTML = createMarkUp(todoList);
  e.currentTarget.reset();
}

export function clickFilterHandler(e) {
  const { target } = e;
  const { action } = target.dataset;
  localStorage.setItem('filter_action', action);
  selectors.list.innerHTML = createMarkUp(filteredList());
}

export function clickItemHandler(e) {
  const { target } = e;
  const { id } = target.closest('.js-task').dataset;
  if (target.classList.contains('js-done')) {
    setDone(id, target);
  } else if (target.classList.contains('js-remove')) {
    removeItem(id);
  }
}

function setDone(id, el) {
  const index = todoList.findIndex(item => item.id === Number(id));
  todoList[index].done = 1;
  localStorage.setItem(KEY, JSON.stringify(todoList));
  el.closest('.js-task').classList.add('mark-done');
  selectors.list.innerHTML = createMarkUp(filteredList());
}

function removeItem(id) {
  const index = todoList.findIndex(item => item.id === Number(id));
  todoList.splice(index, 1);
  localStorage.setItem(KEY, JSON.stringify(todoList));
  selectors.list.innerHTML = createMarkUp(filteredList());
}

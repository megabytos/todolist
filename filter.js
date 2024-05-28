import { todoList } from './main';

export default function filteredList() {
  let arr = todoList;
  const action = localStorage.getItem('filter_action') ?? '';
  switch (action) {
    case 'progress':
      arr = todoList.filter(item => !item.done);
      break;
    case 'done':
      arr = todoList.filter(item => item.done);
      break;
    case 'hight':
    case 'low':
    case 'medium':
      arr = todoList.filter(item => item.priority === action);
      break;
  }
  return arr;
}

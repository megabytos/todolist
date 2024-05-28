export default function createMarkUp(arr) {
  return arr
    .map(
      ({ input, priority, id, done }) =>
        `<li class="js-task ${done ? 'mark-done' : ''}" data-id="${id}">
    <h2>${input}</h2>
    <h3>${priority}</h3>
    <div>
        ${done ? '' : '<button class="js-done">Mark Done</button>'}
        <button class="js-remove">Remove</button>
    </div>
  </li>`
    )
    .join('');
}

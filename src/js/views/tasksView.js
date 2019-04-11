import { elements } from "./base";

export const clearForm = () => {
  elements.rowAdd.style.display = "block";
  const form = document.querySelector(".application__add-task");
  form.parentElement.removeChild(form);
};

const focus = () => document.querySelector(".application__task").focus();

export const renderForm = () => {
  const markup = `
  <div class="application__add-task">
  <form class="application__form">
     <input type="text" class="application__task" autofocus required>
     <div class="application__buttons">
        <button class="btn btn--add" type="submit">Add Task</button>
        <button class="btn btn--cancel">Cancel</button>
     </div>
  </form>
</div>
`;
  elements.list.insertAdjacentHTML("beforeend", markup);
  elements.rowAdd.style.display = "none";
  focus();
};

export const renderUpdateForm = (id, content) => {
  const markup = `
  <div class="application__add-task application__add-task--update" data-edit="true">
  <form class="application__form">
     <input type="text" class="application__task" autofocus required value="${content}">
     <div class="application__buttons">
        <button class="btn btn--update" type="submit">Save</button>
        <button class="btn btn--cancel">Cancel</button>
     </div>
  </form>
</div>
`;
  const el = document.querySelector(`[data-ID="${id}"]`);
  if (el) {
    el.innerHTML = markup;
  }
};

export const renderTasks = (task, id) => {
  const markup = `
  <li class="application__item" data-ID="${id}">
    <label class="application__label">
      <input type="checkbox" class="application__input" />
      <div class="application__empty"></div>
    </label>
    <p class="application__todo application__todo--user">${task}</p>
    <svg class="application__checkbox application__checkbox--delete">
     <use xlink:href="./img/sprite.svg#icon-bin"></use>
    </svg>  
  </li>
  `;
  elements.rowAdd.insertAdjacentHTML("beforebegin", markup);
};

export const renderUpdatedTask = (id, updatedTask) => {
  const markup = `
    <label class="application__label">
      <input type="checkbox" class="application__input" />
      <div class="application__empty"></div>
    </label>
    <p class="application__todo application__todo--user">${updatedTask}</p>
    <svg class="application__checkbox application__checkbox--delete">
     <use xlink:href="./img/sprite.svg#icon-bin"></use>
    </svg>
  `;
  const el = document.querySelector(`[data-ID="${id}"]`);
  if (el) {
    el.innerHTML = markup;
  }
};

// When bin is clicked delete the row. Ask a confirm message

export const deleteTask = id => {
  const el = document.querySelector(`[data-ID="${id}"]`);
  if (el) el.parentElement.removeChild(el);
};
//When completed dot is clicked line-through the text animation + darken the row.

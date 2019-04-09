import { elements } from "./base";

export const clearForm = () => {
  elements.rowAdd.style.display = "block";
  const form = document.querySelector(".application__add-task");
  form.parentElement.removeChild(form);
};
// When row is clicked - show input to add your task, hide bin and + icons. Add button and cancel button
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
};

// When bin is clicked delete the row. Ask a confirm message

//When completed dot is clicked line-through the text animation + darken the row.

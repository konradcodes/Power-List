//Global App Controller

//Models
import Tasks from "./models/Tasks";

//Views
import { elements } from "./views/base";
import * as tasksView from "./views/tasksView";

// CSS
import "../css/main.scss";

/** //? Global State of the App
 * - Tasks Object
 */

const state = {};
//Leaking all the information from state for testing purposes
window.state = state;

// --- CONTROLLERS ---

//? Task Controller

const controlTask = () => {
  // 1) New Task Object and add to state
  if (!state.tasks) state.tasks = new Tasks();
};

// On page load
window.addEventListener("load", () => {
  //Call Task Controller
  controlTask();
});

// --- EVENT LISTENERS ---
elements.list.addEventListener("click", e => {
  e.preventDefault();
  const addTask = e.target.closest(".application__item--add");
  const form = e.target.closest(".application__form");
  const addTaskBtn = e.target.closest(".btn--add");
  const cancelBtn = e.target.closest(".btn--cancel");

  //If Row is clicked
  if (addTask) {
    tasksView.renderForm();
  }

  // if (form) {
  //   console.log(form);
  //   form.addEventListener("submit", e => {
  //     e.preventDefault();
  //     console.log("dziala");
  //   });
  // }
});

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
  state.tasks.addTask(123, "Hello");
  state.tasks.updateTask(123, "New");
  state.tasks.deleteTask(123);
};

// On page load
window.addEventListener("load", () => {
  //Call Task Controller
  controlTask();
});

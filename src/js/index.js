//Global App Controller

//Models
import Tasks from "./models/Tasks";

//Uniq ID
import uniqid from "uniqid";

//Views
import { elements } from "./views/base";
import * as tasksView from "./views/tasksView";

// CSS
import "../css/main.scss";

// /** //? Global State of the App
//  * - Tasks Object
//  */

const state = {};
//Leaking all the information from state for testing purposes
window.state = state;

// --- CONTROLLERS ---

// //? Task Controller

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
  // e.preventDefault();
  const addTask = e.target.closest(".application__item--add");
  const addTaskBtn = e.target.closest(".btn--add");
  const updateBtn = e.target.closest(".btn--update");
  const cancelBtn = e.target.closest(".btn--cancel");
  const deleteBtn = e.target.closest(".application__checkbox--delete");
  const userTask = e.target.closest(".application__todo--user");
  const checkBtn = e.target.closest(".application__input");

  //When Row is clicked - Render the Form on UI
  if (addTask) {
    tasksView.renderForm();
  }
  //When Add Task Button is clicked
  if (addTaskBtn) {
    //Receive Input from the user
    const input = document.querySelector(".application__task").value;
    if (input !== "") {
      //If it's not empty add the task to state.
      const id = uniqid();
      state.tasks.addTask(id, input);
      //Get the Index of the task based on the content compared to the one in state.
      const index = state.tasks.tasks.findIndex(el => el.id === id);
      //Render the task on UI
      tasksView.renderTasks(state.tasks.tasks[index].content, state.tasks.tasks[index].id);
      //Clear form
      tasksView.clearForm();
    } else {
      //When Input is empty - Clear the form
      tasksView.clearForm();
    }
  }
  //When Cancel is clicked Clear the form
  if (cancelBtn) {
    const li = e.target.closest("[data-ID]");
    if (li) {
      const index = state.tasks.tasks.findIndex(el => el.id === li.dataset.id);
      tasksView.renderUpdatedTask(li.dataset.id, state.tasks.tasks[index].content);
    } else {
      tasksView.clearForm();
    }
  }
  //When Bin Icon is Clicked - Delete from State and from UI
  if (deleteBtn) {
    const taskID = deleteBtn.parentElement.dataset.id;
    //Delete Task from the State
    state.tasks.deleteTask(taskID);
    //Delete Task From the UI
    tasksView.deleteTask(taskID);
  }
  if (userTask) {
    //When User Todo Is Clicked open a new form to enable editting of the task
    const taskID = userTask.parentElement.dataset.id;
    const index = state.tasks.tasks.findIndex(el => el.id === taskID);
    //Render the task on UI
    tasksView.renderUpdateForm(taskID, state.tasks.tasks[index].content);
  }
  if (updateBtn) {
    //Receive Input from the user
    const input = document.querySelector(".application__task").value;
    //If it's not empty add the task to state.
    if (input !== "") {
      const taskID = e.target.closest(".application__add-task--update").parentElement.dataset.id;
      state.tasks.updateTask(taskID, input);
      //Get the Index of the task based on the content compared to the one in state.
      const index = state.tasks.tasks.findIndex(el => el.content === input);
      //Render the task on UI
      tasksView.renderUpdatedTask(state.tasks.tasks[index].id, state.tasks.tasks[index].content);
    } else {
      //When Input is empty - Clear the form
      tasksView.clearForm();
    }
  }
  if (checkBtn) {
    const taskID = checkBtn.parentElement.parentElement.dataset.id;
    state.tasks.deleteTask(taskID);
    tasksView.deleteTask(taskID);
  }
});

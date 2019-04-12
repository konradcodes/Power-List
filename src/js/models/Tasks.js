export default class Tasks {
  constructor() {
    this.tasks = [];
  }

  addTask(id, content) {
    const task = { id, content };
    this.tasks.push(task);
    //Persist data in localStorage
    this.persistData();
    return task;
  }

  updateTask(id, newContent) {
    this.tasks.find(el => el.id === id).content = newContent;
    //Persist data in localStorage
    this.persistData();
  }

  deleteTask(id) {
    const index = this.tasks.findIndex(el => el.id === id);
    this.tasks.splice(index, 1);
    //Persist data in localStorage
    this.persistData();
  }

  persistData() {
    //Set local storage
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  readStorage() {
    const storage = JSON.parse(localStorage.getItem("tasks"));
    //Restoring tasks from the localStorage
    if (storage) this.tasks = storage;
  }
}

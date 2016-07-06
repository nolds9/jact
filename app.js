$(document).ready(function (){
  console.log('Ready, Set, Jact');
  class App {
    constructor() {
      this.el = $('#app');
      this.state = {
        tasks: [
          { title: 'Think of an idea',   completed: true  },
          { title: 'Just do it &trade;', completed: false },
          { title: 'Spread the word',    completed: false },
          { title: 'Rule the world!',    completed: false }
        ],
        showForm: false
      };
    }
    listen () {
      // new task button
      this.el.find('#new-task').on('click', function (e) {
        e.preventDefault();
        if (!this.state.showForm) { this.renderNewTaskForm(); }
      }.bind(this));
      // create form button
      this.el.find('#create').on('click', function (e) {
        e.preventDefault();
        let title = $('#title').val();
        this.addTask(title);
        this.state.showForm = false;
        this.updateState(this.state);
      }.bind(this));
      // complete button
      this.el.find('.complete').on('click', function (e) {
        e.preventDefault();
        this.completeTask(e.target.dataset.taskIndex);
      }.bind(this));
      // delete button
      this.el.find('.delete').on('click', function (e) {
        e.preventDefault();
        this.removeTask(e.target.dataset.taskIndex);
      }.bind(this));
      // cancel form button
      this.el.find('#cancel').on('click', function (e) {
        console.log("clicked");
        e.preventDefault();
        this.state.showForm = false;
        this.state.newTask = "";
        this.updateState(this.state);
      }.bind(this));
    }
    updateState (state) {
      this.state = Object.assign(this.state, state);
      this.render();
    }
    addTask (title) {
      if (title) {
        this.state.tasks.push( {
          title,
          completed: false
        });
        this.updateState(this.state);
      }
    }
    completeTask (index) {
      if (this.state.tasks[index]) {
        this.state.tasks[index].completed = !this.state.tasks[index].completed;
        this.updateState(this.state);
      }
    }
    renderNewTaskForm () {
      this.state.showForm = true;
      this.updateState(this.state);
      let html =
      `<input type='text' id='title'>
       <button id='create'>➕</button>
       <button id='cancel'>❮</button>`;
       this.el.find("#task-form").append(html);
       this.listen();
    }
    renderTask (task, i) {
      let className = task.completed ? 'done' : 'active';
      let html =
      `<li class=${className}>
        <button data-task-index=${i} class='complete'>✓</button>
          ${task.title}
        <button data-task-index=${i} class='complete'>✗</button>
      </li>`;
      return html;
    }
    renderTasks () {
      let html = `<ul id='tasks'>`;
      this.state.tasks.forEach(function (task, i) {
        html += this.renderTask(task, i);
      }.bind(this));
      html += `</ul>`
      return html;
    }
    renderContainer () {
      let html =
      `<div class="container">
        <h1>JACT</h1>
        <div id='task-form'>
          <button id='new-task'>❯</button>
        </div>`;
      html += this.renderTasks();
      html += `</div>`;
      return html;
    }
    render () {
      let html = this.renderContainer();
      this.el.html(html);
      this.listen();
    }
  }
  app = new App();
  app.render();
});

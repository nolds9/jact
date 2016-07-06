$(document).ready(function (){
  console.log('Ready, Set, Jact');
  class App {
    constructor() {
      this.el = $('#app')
      this.state = {
        tasks: [
          { title: 'Think of an idea', completed: true  },
          { title: 'Build Jact',       completed: false },
          { title: 'Spread the word',  completed: false },
          { title: 'Rule The world',   completed: false }
        ]
      };
    }
    listen () {
      this.el.find(".complete").on("click", function (e) {
        e.preventDefault();
        this.completeTask(e.target.dataset.taskIndex)
      }.bind(this))
    }
    updateState (state) {
      this.state = Object.assign(this.state, state)
      this.render()
    }
    completeTask (index) {
      if (this.state.tasks[index]) {
        this.state.tasks[index].completed = true
        this.updateState(this.state);
      }
    }
    renderTasks () {
      let html = `<ul id='tasks'>`;
      this.state.tasks.forEach(function (task, i) {
        let className = task.completed ? 'done' : 'active';
        html += `<li class=${className}>${task.title} `;
        html += `<button data-task-index=${i} class="complete">x</button>`; // TODO make the onClick attribute call completeTask
        html += `</li>`;
      });
      html += `</ul>`
      return html;
    }
    render () {
      let html = '';
      html += `<h1>Todos</h1>`
      html += this.renderTasks();
      this.el.html(html)
      this.listen();
    }
  }
  app = new App()
  app.render();
});

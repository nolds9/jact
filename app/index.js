$(document).ready(function (){
  console.log('Ready, Set, Jact');
  class App {
    constructor() {
      this.el = $('#app')
      this.state = {
        greetings: [
          'Hello There',
          'Howdy',
          'Como Estas'
        ]
      };
    }
    updateState (state) {
      this.state = Object.assign(this.state, state)
      this.render()
    }
    renderGreetings () {
      let html = '';
      for (let i = 0; i < this.state.greetings.length; i++) {
        html += `<h${i + 1}>${this.state.greetings[i]}</h${i + 1}>`
      }
      return html
    }
    render () {
      let html = '';
      html = this.renderGreetings();
      this.el.html(html)
    }
  }
  app = new App()
  app.render();
});

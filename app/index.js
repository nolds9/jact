$(document).ready(function (){
  console.log("Ready, Set, Jact");
  class App {
    constructor() {
      this.el = $('#app')
      this.state = {
        greetings: [
          "Hello There",
          "Howdy",
          "Como Estas"
        ]
      };
    }
    // TODO whenever a state change occurs, update state, then rerender app
    // updateState (state) {
    //   this.state = {
    //     ...this.state,
    //     ...state
    //   }
    //   this.render()
    // }
    renderGreetings () {
      let html = '';
      for (let i = 0; i < this.state.greetings.length; i++) {
        html += `<h${i + 1}>${this.state.greetings[i]}</h${i + 1}>`
      }
      console.log(html);
      return html
    }

    render () {
      let html = "";
      html = this.renderGreetings();
      console.log(html);
      // this.el.html(function (i, oldHtml ) {
      //   // TODO: detect if state change
      //   // if so diff oldhtml with new html
      // })
      this.el.html(html)
    }
  }
  app = new App()
  app.render();
});

// Pen: http://codepen.io/moubi/pen/ALpmwy
import StickyNav from './sticky-nav';

class App {
  constructor() {
    this.init();
  }

  init() {
    new StickyNav();
    return this;
  }
}

window.APP = new App();

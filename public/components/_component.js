import * as UIKit from '../ui-kit/index.js';

class Component {
  parent

  constructor(parent) {
    this.parent = parent;
  }

  render() {
    this.parent.innerHTML = '';

    this.parent.appendChild(UIKit.header());

    const main = document.createElement('main');
    this.parent.appendChild(main);

    this.parent = main;
  }
}

export default Component;

import Component from './_component.js';

class IndexPageComponent extends Component {
  render() {
    super.render();

    const h1 = document.createElement('h1');
    h1.innerHTML = `
      <a data-section="index">Рестораны</a>
    `;

    this.parent.appendChild(h1);

    const a2 = document.createElement('a');
    a2.dataset.section = 'register';
    a2.textContent = 'register';

    this.parent.appendChild(a2);
  }
}

export default IndexPageComponent;

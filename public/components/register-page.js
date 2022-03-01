import Component from './_component.js';

class RegisterPageComponent extends Component {
  render() {
    super.render();

    const a = document.createElement('a');
    a.dataset.section = 'index';
    a.textContent = 'index';

    this.parent.appendChild(a);
  }
}

export default RegisterPageComponent;

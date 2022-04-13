import { renderAndUpdateURN } from '../../../render/render.js';

export const suggests = () => {
  return {
    suggestsSearch: [
      {
        type: 'keyup',
        selector: 'id',
        listener(app, store, e) {
          if (e.key !== 'Enter' && e.keyCode !== 13) {
            return;
          }

          const query = e.target.value;

          store.actions.suggest(query);
        }
      }
    ],
    suggestsRow: [
      {
        type: 'click',
        selector: 'class',
        listener(app, store, e) {
          const { target } = e;

          const address = target.innerText;
          const end = target.getAttribute('end') === 'true';

          document.getElementById('suggestsSearch').value = address;

          if (end) {
            localStorage.setItem('address', address);
            renderAndUpdateURN('/');
            return;
          }

          store.actions.suggest(address);
        }
      }
    ]
  }
};
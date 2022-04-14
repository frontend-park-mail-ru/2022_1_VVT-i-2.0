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
          localStorage.setItem('address', query);

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

          localStorage.setItem('address', address);

          if (end) {
            renderAndUpdateURN('/');
            return;
          }

          store.actions.suggest(address);
        }
      }
    ]
  }
};

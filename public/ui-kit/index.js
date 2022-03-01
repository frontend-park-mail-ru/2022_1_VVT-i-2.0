export const header = () => {
  const _header = document.createElement('header');

  _header.innerHTML = `
    <div>
      <a data-section="index">Delivery Club</a>
    </div>
    <div id="search">
    </div>
    <div>
      <a data-section="login">Войти</a>
    </div>
  `;

  return _header;
}

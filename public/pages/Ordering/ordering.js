import components from '../../components/import.js';

const ordering = (app) => {
  const restName = 'McDonalds';

  const orderPoints = [
    {
      imgPath: 'icons/Image.png',
      dishName: 'Бургер по-восточному',
      additives: 'Без котлеты',
      dishCount: 3,
      price: 269,
    },
    {
      imgPath: 'icons/Image.png',
      dishName: 'Бургер по-восточному',
      additives: 'Без котлеты',
      dishCount: 3,
      price: 269,
    },
    {
      imgPath: 'icons/Image.png',
      dishName: 'Бургер по-восточному',
      additives: 'Без котлеты',
      dishCount: 3,
      price: 269,
    },
  ];

  app.root.innerHTML = components.header(false, 'TRASH/avatar.jpg');

  const main = document.createElement('main');
  main.innerHTML = components.ordering({ restName, orderPoints });

  app.root.appendChild(main);
};

export default ordering;

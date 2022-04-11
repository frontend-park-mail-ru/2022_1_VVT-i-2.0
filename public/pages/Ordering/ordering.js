import components from '../../components/import.js';

const ordering = (app, store) => {
  const restName = 'McDonalds';

  const orderPoints = [
    {
      imgPath: '/graphics/icons/Image.png',
      dishName: 'Бургер по-восточному',
      additives: 'Без котлеты',
      dishCount: 3,
      price: 269,
    },
    {
      imgPath: '/graphics/icons/Image.png',
      dishName: 'Бургер по-восточному',
      additives: 'Без котлеты',
      dishCount: 3,
      price: 269,
    },
    {
      imgPath: '/graphics/icons/Image.png',
      dishName: 'Бургер по-восточному',
      additives: 'Без котлеты',
      dishCount: 3,
      price: 269,
    },
  ];

  app.root.innerHTML = components.header(false, '/graphics/images/avatar.jpg');

  const main = document.createElement('main');
  main.innerHTML = components.ordering({ restName, orderPoints });

  app.root.appendChild(main);
};

export default ordering;

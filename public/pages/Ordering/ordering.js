import components from '../../components/import.js';

const ordering = (app, store) => {
  const restName = 'McDonalds';

  const orderPoints = [
    {
      imgPath: '/graphics/icons/Image.png',
      productName: 'Бургер по-восточному',
      info: 'Без котлеты',
      count: 3,
      price: 269,
    },
    {
      imgPath: '/graphics/icons/Image.png',
      productName: 'Бургер по-восточному',
      info: 'Без котлеты',
      count: 3,
      price: 269,
    },
    {
      imgPath: '/graphics/icons/Image.png',
      productName: 'Бургер по-восточному',
      info: 'Без котлеты',
      count: 3,
      price: 269,
    },
  ];

  app.root.innerHTML = components.header(
    Object.keys(store.getters.user()).length !== 0, '/graphics/images/avatar.jpg'
  );

  const main = document.createElement('main');
  main.innerHTML = components.ordering({ restName, orderPoints });

  app.root.appendChild(main);
};

export default ordering;

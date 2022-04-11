export const productEvents = () => {
  return [
    {
      type: 'click',
      selector: 'class',
      listener(app, store, e) {
        console.log('HERE!');
      }
    }
  ];
};

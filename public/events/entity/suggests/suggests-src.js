export const debounce = (func, time) => {
  let isCooldown = false;

  return function () {
    if (isCooldown) {
      return;
    }

    func.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), time);
  };
};

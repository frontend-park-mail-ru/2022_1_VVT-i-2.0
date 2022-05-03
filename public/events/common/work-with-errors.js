export const getElemParameters = (elemID) => {
  const input = document.getElementById(elemID);

  return {
    value: input.children[0].value,
    childList: input.querySelectorAll("div > input, div"),
  };
};

/**
 * @function Визуализирует ошибку. Применяет стили ошибки (поле для ввода
 *      выделяет красным цветом и снизу выводит текст ошибки
 * @param {NodeListOf<Element>} childList - Список элементов для применения стилей.
 * @param {string} error - Текст ошибки.
 */
export const getVisibleError = (childList, error) => {
  for (let childNode of childList) {
    childNode.classList.add("error");
    if (childNode.classList.contains("hidden")) {
      childNode.innerText = error;
      childNode.classList.remove("hidden");
    }
  }
};

/**
 * @function Скрывает ошибку.
 * @param {NodeListOf<Element>} childList - Список элементов для применения стилей.
 */
export const removeVisibleError = (childList) => {
  for (let childNode of childList) {
    if (childNode.classList.contains("error")) {
      childNode.classList.remove("error");
    }
  }

  childList[1].classList.add("hidden");
};

const IsInputEmpty = (elemID) => {
  return getElemParameters(elemID).value === "";
};

export const getEmptyInputs = (formInputs) => {
  let emptyInputs = [];
  formInputs.forEach((elemID) => {
    if (IsInputEmpty(elemID)) {
      emptyInputs.push(elemID);
    }
  });

  return emptyInputs;
};

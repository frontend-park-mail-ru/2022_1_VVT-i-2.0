/**
 * @function Определяет и возвращает положение курсора.
 * @param {Object} ctrl - Объект, хранящий статусы инпутов страницы.
 * @return {int} - Позиция курсора в строке.
 */
export const getCursorPosition = (ctrl) => {
  let CaretPos = 0;
  if (document.selection) {
    ctrl.focus();
    let Sel = document.selection.createRange();
    Sel.moveStart("character", -ctrl.value.length);
    CaretPos = Sel.text.length;
  } else if (ctrl.selectionStart || ctrl.selectionStart === "0") {
    CaretPos = ctrl.selectionStart;
  }
  return CaretPos;
};

/**
 * @function По указанной позиции position устанавливает курсор.
 * @param {Event} e - Событие.
 * @param {Object} position - Требуемая позиция курсора в поле input.
 */
export const setCursorPosition = (e, position) => {
  e.target.focus();
  e.target.setSelectionRange(e.target.value.length, position);
};

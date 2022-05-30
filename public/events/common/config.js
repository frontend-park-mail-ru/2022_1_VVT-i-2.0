export const Regex = {
  letterSymbol: /^\p{L}$/u,
  numericSymbol: /[0-9]/,
  confirmCode: /[0-9]{4}/,
  phoneNumber: /^[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}$/,
  name: /^[A-ZА-Я]{1}[a-zа-я]{1,25}$/,
  email:
    /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
};

export const EntityLengthLimit = {
  name: 12,
  email: 50,
  phoneNumber: 16,
  confirmCode: 4,
  entrance: 4,
  intercom: 10,
  floor: 3,
  flat: 4,
  comment: 500,
};

export const ErrorMsg = {
  errorPhoneNumber: "Формат телефона: +7(988)888-88-88",
  errorName: "Длина не менее 2 букв",
  errorEmail: "Формат email: fobrinto@gmail.com",
  errorConfirmCode: "Формат кода: 6666",
  errorEmptyInput: "Заполните это поле",
};

const DELETE_KEY = 46;
const BACKSPACE_KEY = 8;

export const Keypad = {
  deleteSymbols: [DELETE_KEY, BACKSPACE_KEY],
};

export const Regex = {
    letterSymbol: /^\p{L}$/u,
    phoneNumber: /^[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}$/,
    name: /^[A-ZА-Я]{1}[a-zа-я]{2,25}$/,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^[A-Za-zА-Яа-я0-9]{8,50}$/,
};

const DELETE_KEY = 46;
const BACKSPACE_KEY = 8;

export const ErrorMsg = {
    errorPhoneNumber: 'Формат телефона: +7(988)888-88-88',
    errorName: 'Длина не менее 3 символов',
    errorEmail: 'Формат email: fobrinto@gmail.com',
    errorPassword: 'Длина не менее 8 символов',
    errorPasswordCMP: 'Пароли не совпадают',
    errorEmptyInput: 'Заполните это поле',
};

export const Keypad = {
    deleteSymbols: [DELETE_KEY, BACKSPACE_KEY],
};

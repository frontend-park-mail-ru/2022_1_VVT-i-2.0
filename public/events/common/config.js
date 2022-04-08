export const Regex = {
    phoneNumber: new RegExp('^[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}$'),
    name: new RegExp('^[A-ZА-Я]{1}[a-zа-я]{2,25}$'),
    email: new RegExp('^([A-Za-z0-9_\\-\.])+\@([A-Za-z0-9_\\-\.])+\\.([A-Za-z]{2,4})$'),
    password: new RegExp('^[A-Za-zА-Яа-я0-9]{8,50}$'),
};

const DELETE_KEY = 46;
const BACKSPACE_KEY = 8;

export const ErrorMsg = {
    errorPhoneNumber: 'Формат телефона: +7(988)888-88-88',
    errorName: 'Имя должно состоять из букв, не менее 3',
    errorEmail: 'Формат email: fobrinto@gmail.com',
    errorPassword: 'Длина не менее 8 символов',
    errorPasswordCMP: 'Пароли не совпадают',
    errorEmptyInput: 'Заполните это поле',
};

export const Keypad = {
    deleteSymbols: [DELETE_KEY, BACKSPACE_KEY],
};

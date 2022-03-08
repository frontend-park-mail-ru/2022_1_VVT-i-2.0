export const Regex = {
    phoneNumber: new RegExp('^[+]{1}7\[(]{1}[0-9]{3}[)]{1}[0-9]{3}-[0-9]{2}-[0-9]{2}$'),
    name: new RegExp('^[A-ZА-Я]{1}[a-zа-я]{1,}$'),
    password: new RegExp('^[A-Za-zА-Яа-я0-9]{8,}$'),
};

export const ErrorMsg = {
    errorPhoneNumber: 'Формат телефона: +7(988)888-88-88',
    errorName: 'Длина > 1 символа(без спецсимволов)',
    errorPassword: 'Длина > 7 символов(без спецсимволов)',
    errorPasswordCMP: 'Пароли не совпадают',
};

export function isAvailableForSend(statusForm) {
    Object.entries(statusForm).forEach(([input, status]) => {
        if (!status) {
            return false;
        }
    });

    return true;
}

export function numberAutocomplete(e) {
    if (e.target.value.length < 3) {
        e.target.value = '+7(';
    }
    if (e.target.value.length === 6) {
        e.target.value += ')';
    }
    if (e.target.value.length === 10 ||
        e.target.value.length === 13) {
        e.target.value += '-';
    }
}

export function nameAutocomplete(e) {
    e.target.value = e.target.value
        .split('')
        .map((c, i) => i === 0 ? c.toUpperCase() : c.toLowerCase())
        .join('');
}

function getVisibleError(childList, error) {
    for (let childNode of childList) {
        childNode.classList.add('error');
        if (childNode.classList.contains('hidden')) {
            childNode.innerText = error;
            childNode.classList.remove('hidden');
        }
    }
}

function removeVisibleError(childList) {
    for (let childNode of childList) {
        if (childNode.classList.contains('error')) {
            childNode.classList.remove('error');
        }
    }

    childList[1].classList.add('hidden');
}

function setFormStatus(statusForm, elemID, status) {
    switch (elemID) {
        case 'loginPhone':
            statusForm.isValidPhone = status;
            break;
        case 'loginPassword':
            statusForm.isValidPassword = status;
            break;
        case 'registerPhone':
            statusForm.isValidPhone = status;
            break;
        case 'registerName':
            statusForm.isValidName = status;
            break;
        case 'registerPassword':
            statusForm.isValidPassword = status;
            break;
        case 'registerRepeatPassword':
            statusForm.isValidRepeatPassword = status;
            break;
    }
}

export function inputDataManager(e, elemID, statusForm, regularExpression, errorMsg) {
    const elem = document.getElementById(elemID);
    const childList = elem.querySelectorAll('div > input, div');

    if (e.target.value !== '' && !regularExpression.exec(e.target.value)) {
        setFormStatus(statusForm, elemID, false);
        getVisibleError(childList, errorMsg);
        return;
    }

    setFormStatus(statusForm, elemID, true);
    removeVisibleError(childList);
}

export function passwordController(e, statusRegisterForm, regularExpression) {
    const pass1 = document.getElementById('registerPassword');
    const pass2 = document.getElementById('registerRepeatPassword');

    const passVal1 = pass1.children[0].value;
    const passVal2 = pass2.children[0].value;

    const childList1 = pass1.querySelectorAll('div > input, div');
    const childList2 = pass2.querySelectorAll('div > input, div');

    if (passVal1 === '' || !regularExpression.exec(passVal1)) {
        setFormStatus(statusRegisterForm, 'registerPassword', false);
        getVisibleError(childList1, ErrorMsg.errorPassword);
        return;
    } else if (e.target.parentElement.getAttribute('id') === 'registerPassword') {
        setFormStatus(statusRegisterForm, 'registerPassword', true);
        removeVisibleError(childList1);
        return;
    }

    if (passVal2 !== '' && passVal1 !== '' && passVal1 !== passVal2) {
        setFormStatus(statusRegisterForm, 'registerRepeatPassword', false);
        getVisibleError(childList2, ErrorMsg.errorPasswordCMP);
        return;
    }

    setFormStatus(statusRegisterForm, 'registerPassword', true);
    setFormStatus(statusRegisterForm, 'registerRepeatPassword', true);

    removeVisibleError(childList1);
    removeVisibleError(childList2);
}

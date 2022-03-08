export const Regex = {
    phoneNumber: new RegExp('^[+]{1}7\[(]{1}[0-9]{3}[)]{1}[0-9]{3}-[0-9]{2}-[0-9]{2}$'),
    name: new RegExp('^[A-ZА-Я]{1}[a-zа-я]{1,}$'),
    password: new RegExp('^[A-Za-zА-Яа-я0-9]{8,}$'),
};

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

export function getVisibleError(childList) {
    for (let childNode of childList) {
        childNode.classList.add('error');
        if (childNode.classList.contains('hidden')) {
            childNode.classList.remove('hidden');
        }
    }
}

export function removeVisibleError(childList) {
    for (let childNode of childList) {
        if (childNode.classList.contains('error')) {
            childNode.classList.remove('error');
        }
    }

    childList[1].classList.add('hidden');
}

export function inputDataManager(e, elemID, regularExpression) {
    const elem = document.getElementById(elemID);
    const childList = elem.querySelectorAll('div > input, div');

    if (e.target.value !== '' && !regularExpression.exec(e.target.value)) {
        getVisibleError(childList);
        return;
    }

    removeVisibleError(childList);
}

export function passwordController(e, regularExpression) {
    const pass1 = document.getElementById('registerPassword');
    const pass2 = document.getElementById('registerRepeatPassword');

    const passVal1 = pass1.children[0].value;
    const passVal2 = pass2.children[0].value;

    const childList1 = pass1.querySelectorAll('div > input, div');
    const childList2 = pass2.querySelectorAll('div > input, div');

    if (!regularExpression.exec(passVal1)) {
        getVisibleError(childList1);
        return;
    } else {
        removeVisibleError(childList1);
    }

    if (passVal1 !== passVal2 || !regularExpression.exec(passVal2)) {
        getVisibleError(childList2);
        return;
    }

    removeVisibleError(childList1);
    removeVisibleError(childList2);
}

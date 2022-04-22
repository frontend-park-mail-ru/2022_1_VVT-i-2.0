import { renderAndUpdateURN } from '../render/render';

const METHODS = { GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE: 'DELETE' };

const BASE_URI = 'http://localhost:8080';

const DEFAULT_OPTIONS = {
    method: METHODS.GET,
    headers: {'Content-Type': 'application/json'},
    credentials: 'include'
};

/**
 * @function Осуществляет отправку запроса.
 * @param {string} url - URL запроса.
 * @param {Object} options - Опции отправки запроса.
 * @return {Promise} - возвращает Promise на отправку запроса.
 */
const request = (url, options = DEFAULT_OPTIONS) => {
    options.credentials = 'include';
    options.headers = {};
    if (options.body) {
        switch (url) {
            case '/update':
                options.headers = {};
                console.log(options.body);
                break;
            default:
                options.headers['Content-Type'] = 'application/json';
                options.body = JSON.stringify(options.body);
                break;
        }
        // options.body = JSON.stringify(options.body);
    }
    if (sessionStorage.getItem('token')) {
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('token');
    }

    return fetch(BASE_URI + '/api/v1' + url, options)
        .catch(() => {
            sessionStorage.setItem('error', '500');
            renderAndUpdateURN('/networkErrors');
        })
        .then((result) => {
            if (result.status === 200 && result.headers.get('X-CSRF-Token') !== '') {
                sessionStorage.setItem('token', result.headers.get('X-CSRF-Token'));
            }

            if (result.status === 500) {
                sessionStorage.setItem('error', '500');
                renderAndUpdateURN('/networkErrors');
                return Promise.reject();
            }

            if (Number(result.headers.get('Content-Length')) === 0) {
                if (result.status !== 200) {
                    alert('В ходе обработки запроса произошла ошибка');
                    return Promise.reject();
                }

                return {};
            }

            const data = result.json();

            if (result.status !== 200) {
                alert(data.error);
                return Promise.reject();
            }

            return data;
        });
}

/**
 * @function Осуществляет отправку запроса на получение ресторанов.
 * @return {Promise} - возвращает Promise на отправку запроса.
 */
export const getRestaurants = () => {
    return request('/restaurants');
}

export const getProducts = (restName) => {
    return request(`/restaurant/${restName}`);
}

export const getUser = () => {
    return request('/user');
}

export const updateUser = (user) => {
    return request('/update', { method: METHODS.POST, body: user });
}

export const sendCode = (phone) => {
    return request('/send_code', { method: METHODS.POST, body: { phone } });
}

/**
 * @function Осуществляет отправку запроса на регистрацию пользователя.
 * @return {Promise} - возвращает Promise на отправку запроса.
 */
export const register = (user) => {
    return request('/register', {method: METHODS.POST, body: user});
}

/**
 * @function Осуществляет отправку запроса на авторизацтю пользователя.
 * @return {Promise} - возвращает Promise на отправку запроса.
 */
export const login = (user) => {
    return request('/login', {method: METHODS.POST, body: user});
}

/**
 * @function Осуществляет отправку запроса на выход пользователя из учетной записи.
 * @return {Promise} - возвращает Promise на отправку запроса.
 */
export const logout = () => {
    return request('/logout', {method: METHODS.GET});
}

export const suggest = (query) => {
    return request(`/suggest?q=${query}`);
}

export const createOrder = (order) => {
    return request('/order', { method: METHODS.POST, body: order })
}

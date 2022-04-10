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
    if (options.body) {
        Object.assign(options, {
            headers: {'Content-Type': 'application/json'}
        });
        options.body = JSON.stringify(options.body);
    }
    return fetch(BASE_URI + '/api/v1' + url, options)
        .catch(() => {
            sessionStorage.setItem('error', '500');
            renderAndUpdateURN('/networkErrors')
        })
        .then((res) => {
            if (res.status === 500) {
                sessionStorage.setItem('error', '500');
                renderAndUpdateURN('/networkErrors');
            }
        });
}

/**
 * @function Осуществляет отправку запроса на получение ресторанов.
 * @return {Promise} - возвращает Promise на отправку запроса.
 */
export const getRestaurants = () => {
    return request('/restaurants');
}

export const getProducts = () => {
    return request('/products');
}

export const getUser = () => {
    return request('/user');
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
    return request('/auth/logout', {method: METHODS.POST});
}

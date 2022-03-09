const METHODS = {GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE: 'DELETE'};

const BASE_URI = 'http://localhost:8080';

const DEFAULT_OPTIONS = {
    method: METHODS.GET,
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
};

const request = (url, options = DEFAULT_OPTIONS) => {
    options.credentials = 'include';
    if (options.body) {
        headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(options.body);
    }
    return fetch(BASE_URI + '/api/v1' + url, options);
}

export const getRestaurants = () => {
    return request('/restaurants');
}

export const register = (user) => {
    return request('/register', {method: METHODS.POST, body: user});
}

export const login = (user) => {
    return request('/login', {method: METHODS.POST, body: user});
}

export const logout = () => {
    return request('/auth/logout', {method: METHODS.POST});
}

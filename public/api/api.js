const METHODS = { GET: 'GET', POST: 'POST', PUT: 'PUT', DELETE: 'DELETE' };

const BASE_URI = 'localhost:3001';

const DEFAULT_OPTIONS = {
  method: METHODS.GET,
  headers: { 'Content-Type': 'application/json' }
};

const request = (url, options = DEFAULT_OPTIONS) => {
  if (options.body) {
    options.body = JSON.stringify(options.body);
  }
  return fetch(BASE_URI + url, options).then((res) => res.json());
}

export const getRestaurants = () => {
  return request('/restaurants');
}

export const register = (user) => {
  return request('/register', { method: METHODS.POST, body: user });
}

export const login = (user) => {
  return request('/login', { method: METHODS.POST, body: user });
}

export const logout = (user) => {
  return request('/logout', { method: METHODS.DELETE, body: user });
}

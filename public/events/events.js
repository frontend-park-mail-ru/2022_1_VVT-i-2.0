import * as api from '../api/api.js';

const EVENTS = {
    closeImg: {
        type: 'click',
        listener(app, e) {
            app.modal.classList.remove('shown');
            app.modal.innerHTML = '';
            app.root.lastChild.classList.remove('hidden');
        }
    },
    loginButton: {
        type: 'click',
        listener(app, e) {
            const phone = document.getElementById('loginPhone').value;
            const password = document.getElementById('loginPassword').value;

            api
                .login({ phone, password })
                .then((res) => {
                    console.log(res.data);
                });
        }
    },
    registerButton: {
        type: 'click',
        listener(app, e) {
            const phone = document.getElementById('registerPhone').value;
            const name = document.getElementById('registerName').value;
            const password = document.getElementById('registerPassword').value;
            const repeatPassword = document.getElementById('registerRepeatPassword').value;

            if (password !== repeatPassword) {
                return;
            }

            api
                .register({ phone, name, password })
                .then((res) => {
                    console.log(res);
                });
        }
    },
};

export default EVENTS;

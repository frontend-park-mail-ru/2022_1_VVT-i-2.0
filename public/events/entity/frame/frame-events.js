export const getFrameEvents = () => {
    return [
        {
            type: 'click',

            /**
             * @function Закрывает форму при нажатии на значок 'x'.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, store, e) {
                app.modal.classList.remove('shown');
                app.modal.innerHTML = '';
                app.root.lastChild.classList.remove('input-block__error_hidden');

                console.log(store.getters.user());
            }
        }
    ];
}

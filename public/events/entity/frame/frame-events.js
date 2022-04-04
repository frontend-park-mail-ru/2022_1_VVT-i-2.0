export function getFrameEvents () {
    return [
        {
            type: 'click',

            /**
             * @function Закрывает форму при нажатии на значок 'x'.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener (app, e) {
                app.modal.classList.remove('shown');
                app.modal.innerHTML = '';
                app.root.lastChild.classList.remove('hidden');
            }
        }
    ];
}

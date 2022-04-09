/**
 * @function По событию e, вызывает автоматическое форматирование имени пользователя
 *      под нужный шаблон. Имя должно начинаться с заглавной буквы, остальные символы
 *      должны быть строчного типа.
 * @param {Event} e - Объект события, по которому вызывается функция.
 */
export const nameAutocomplete = (e) => {
    e.target.value = e.target.value
        .split('')
        .map((c, i) => i === 0 ? c.toUpperCase() : c.toLowerCase())
        .join('');
}

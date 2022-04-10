const NETWORK_ERRORS_CONFIGURATION = {
    404: {
        header: 'Page not found',
        text: 'Ошибка 404. Такая страница не существует либо она была удалена.',
    },
    500: {
        header: 'Internal server error',
        text: 'Ошибка 500. Сервер не отвечает. Перезвоните позже.'
    }
}

export default NETWORK_ERRORS_CONFIGURATION;

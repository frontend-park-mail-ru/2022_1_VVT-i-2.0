import components from '../../components/import.js';

const NetworkErrorPage = (app) => {
    app.root.innerHTML = components.NetworkErrorForm('ere', 'erere');
};

export default NetworkErrorPage;

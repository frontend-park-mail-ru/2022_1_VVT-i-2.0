import components from "../../components/import.js";

const orderHistoryPage = (app, store) => {
    app.root.innerHTML = components.header();

    const main = document.createElement("main");
    main.innerHTML = components.personInfoForm(store.getters.user());

    app.root.appendChild(main);
};

export default orderHistoryPage;

import components from "../../components/import.js";

const profilePage = (app, store) => {
  app.root.innerHTML = components.header();

  const main = document.createElement("main");
  // const avatar = store.getters.getAvatar();
  main.innerHTML = components.personInfoForm(store.getters.user());

  app.root.appendChild(main);
};

export default profilePage;

import { preview } from "./input-src";

export const getInputEvents = () => {
  return [
    {
      type: "change",
      selector: "id",
      listener(app, store, e) {
        const avatarPreview = document.getElementById("user-avatar-preview");
        preview(e.target, avatarPreview);
        sessionStorage.setItem('avatar', JSON.stringify(e.target.files[0]));
      },
    },
  ];
};

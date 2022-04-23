import {actions} from "../../../store/import";

export const preview = (input, avatarPreview) => {
    const file    = input.files[0];
    const reader  = new FileReader();

    reader.onloadend = function () {
        avatarPreview.src = reader.result;
        // actions.changeAvatar(avatarPreview.src);
        // console.log(avatarPreview.src);
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        avatarPreview.src = "";
    }
};

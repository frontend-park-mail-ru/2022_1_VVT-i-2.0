import {preview} from "./input-src";
import {avatar} from "../../../store/store/store";

export const getInputEvents = () => {
    return [
        {
            type: 'change',
            selector: 'id',
            listener(app, store, e) {
                const avatarPreview = document.getElementById('user-avatar-preview');
                preview(e.target, avatarPreview);
                avatar = e.target.files[0];
            }
        }
    ];
}

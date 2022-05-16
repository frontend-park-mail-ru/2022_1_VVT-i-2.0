import { EntityLengthLimit } from "../../common/config.js";

export const getAdditionalAddressEvents = (type) => {
  return [
    {
      type: "input",
      selector: "id",
      listener(app, store, e) {
        e.target.value = e.target.value.slice(0, EntityLengthLimit[type]);
      },
    },
  ];
};

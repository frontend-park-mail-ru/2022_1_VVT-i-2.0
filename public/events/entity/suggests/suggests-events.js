import { renderAndUpdateURN } from "../../../render/render.js";
import { debounce } from "./suggests-src.js";

const suggest = debounce((store, query) => store.actions.suggest(query), 500);

export const suggests = () => {
  return {
    suggestsSearch: [
      {
        type: "input",
        selector: "id",
        listener(app, store, e) {
          const query = e.target.value;
          localStorage.setItem("address", query);

          suggest(store, query);
        },
      },
    ],
    suggestsRow: [
      {
        type: "click",
        selector: "class",
        listener(app, store, e) {
          const { target } = e;

          if (target.getAttribute("default") === "true") {
            return;
          }

          const address = target.innerText;
          const end = target.getAttribute("end") === "true";

          document.getElementById("suggestsSearch").value = address;

          localStorage.setItem("address", address);

          if (end) {
            renderAndUpdateURN("/");
            return;
          }

          store.actions.suggest(address);
        },
      },
    ],
  };
};

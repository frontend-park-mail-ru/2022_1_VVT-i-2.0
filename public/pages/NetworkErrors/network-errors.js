import components from "../../components/import.js";
import NETWORK_ERRORS_CONFIGURATION from "../../configurations/network-errors.js";

const NetworkErrorPage = (app, store) => {
  const error = sessionStorage.getItem("error");
  app.root.innerHTML = components.NetworkErrorForm(
    NETWORK_ERRORS_CONFIGURATION[error]
  );
};

export default NetworkErrorPage;

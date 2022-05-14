import { getFrameEvents } from "./frame/frame-events.js";
import { getButtonEvents } from "./button/button-events.js";
import { getNameFieldEvents } from "./name/name-events.js";
import { getPhoneFieldEvents } from "./phone/phone-events.js";
import { getEmailFieldEvents } from "./email/email-events.js";
import { dishEvents } from "./dish/dish-events.js";
import { suggests } from "./suggests/suggests-events.js";
import { getConfirmCodeFieldEvents } from "./confirmCode/confirm-code-events.js";
import { getInputEvents } from "./input/input-events";
import { categories } from "./categories/categories-events.js";
import { search } from "./search/search-events.js";
import { getAdditionalAddressEvents } from "./additionalAddress/additional-address-events";

const Event = {
  getFrameEvents,
  getButtonEvents,
  getNameFieldEvents,
  getPhoneFieldEvents,
  getEmailFieldEvents,
  dishEvents,
  suggests,
  getConfirmCodeFieldEvents,
  getInputEvents,
  categories,
  search,
  getAdditionalAddressEvents
};

export default Event;

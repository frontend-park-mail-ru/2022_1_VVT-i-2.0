import ELEMS_CONFIGURATION from "./elems.js";
import COLORS from "./colors/colors.js";

const FORMS_CONFIGURATION = {
  inputs: {
    loginForm: [
      {
        title: "Телефон",
        placeholder: "+7(",
        width: ELEMS_CONFIGURATION.inputs.STANDARD,
        id: "loginPhone",
      },
    ],
    registerForm: [
      {
        title: "Телефон",
        placeholder: "+7(",
        width: ELEMS_CONFIGURATION.inputs.STANDARD,
        id: "registerPhone",
      },
      {
        title: "Имя",
        placeholder: "Введите имя",
        width: ELEMS_CONFIGURATION.inputs.STANDARD,
        id: "registerName",
      },
      {
        title: "Электронная почта",
        placeholder: "Введите электронную почту",
        width: ELEMS_CONFIGURATION.inputs.STANDARD,
        id: "registerEmail",
      },
    ],
    confirmCodeForm: [
      {
        title: "Код",
        placeholder: "Введите последние 4 цифры номера",
        width: ELEMS_CONFIGURATION.inputs.STANDARD,
        id: "confirmCode",
      },
    ],
    personInfoForm: [
      {
        title: "Имя",
        placeholder: "Введите имя",
        width: ELEMS_CONFIGURATION.inputs.LARGE,
        id: "profileName",
        name: "name",
      },
      {
        title: "Телефон",
        placeholder: "+7(",
        width: ELEMS_CONFIGURATION.inputs.LARGE,
        id: "profilePhone",
      },
      {
        title: "Электронная почта",
        type: "email",
        placeholder: "Введите почту",
        width: ELEMS_CONFIGURATION.inputs.LARGE,
        id: "profileEmail",
        name: "email",
      },
    ],
    ordering: {
      largeInputs: [
        {
          title: "Телефон",
          placeholder: "+7(",
          width: ELEMS_CONFIGURATION.inputs.VERY_LARGE,
          id: "orderingPhone",
        },
        {
          title: "Адрес доставки",
          placeholder: "Введите адрес доставки",
          width: ELEMS_CONFIGURATION.inputs.VERY_LARGE,
          id: "orderingAddress",
        },
      ],
      smallInputs: [
        {
          title: "Подъезд",
          width: ELEMS_CONFIGURATION.inputs.SMALL,
          id: "orderingEntrance",
        },
        {
          title: "Домофон",
          width: ELEMS_CONFIGURATION.inputs.SMALL,
          id: "orderingIntercom",
        },
        {
          title: "Этаж",
          placeholder: "",
          width: ELEMS_CONFIGURATION.inputs.SMALL,
          id: "orderingFloor",
        },
        {
          title: "Квартира",
          width: ELEMS_CONFIGURATION.inputs.SMALL,
          id: "orderingFlat",
        },
      ],
    },
  },
  menu: {
    profilePoints: [
      { point: "Личные данные", dataSection: "profile" },
      { point: "Мои заказы", dataSection: "orderHistory" },
      { point: "Выход", class: "logoutButton" },
    ],
    typePaymentChoice: ["Онлайн оплата", "Google Pay", "Sber Pay"],
  },
};

export default FORMS_CONFIGURATION;

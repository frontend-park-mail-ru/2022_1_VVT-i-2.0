const addRemoveButton = (buttonType, className, id) => {
  let imgPath = "";
  switch (buttonType) {
    case "addPoint":
      imgPath = "/graphics/icons/add_point.svg";
      break;
    case "removePoint":
      imgPath = "/graphics/icons/remove_point.svg";
      break;
    default:
      imgPath = "/graphics/icons/404.svg";
  }

  const template = `
        <div class="button-add-remove {{className}}" data-id="{{id}}">
            <img class="{{className}}" src="{{imgPath}}" data-id="{{id}}">
        </div>
    `;

  return Mustache.render(template, { imgPath, className, id });
};

export default addRemoveButton;

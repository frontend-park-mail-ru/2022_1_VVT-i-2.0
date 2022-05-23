export const getParentNodeDataIdByClass = (el, cssClass) => {
  if (el.classList.contains(cssClass)) {
    return el.dataset.id;
  }

  if (el.parentNode && el.parentNode.tagName !== "BODY") {
    if (el.parentNode.classList.contains(cssClass)) {
      return el.parentNode.dataset.id;
    } else {
      return getParentNodeDataIdByClass(el.parentNode, cssClass);
    }
  } else {
    return null;
  }
};

import UIKIT from "../../ui-kit/import.js";

const categories = (categories) => {
  const template = `
    <div class="categories">
      {{#categories}}
        {{&category}}
      {{/categories}}
    </div>
  `;
  return Mustache.render(template, {
    categories,
    category() {
      return UIKIT.category(this.title, this.selected);
    }
  });
};

export default categories;

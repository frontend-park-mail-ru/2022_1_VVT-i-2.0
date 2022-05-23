import UIKIT from "../../ui-kit/import.js";

const categories = (categories) => {
  const isMobile = window.screen.width < 815;

  if (isMobile) {
    categories.unshift({ title: 'Все' });
  }

  const template = `
    {{#isMobile}}
      <select class="categories__select" id="categoriesSelect">
        {{#categories}}
          <option value="{{title}}" {{#selected}} selected {{/selected}}>{{title}}</option>
        {{/categories}}
      </select>
    {{/isMobile}}
    {{^isMobile}}
      <div class="categories">
        {{#categories}}
          {{&category}}
        {{/categories}}
      </div>
    {{/isMobile}}
  `;
  return Mustache.render(template, {
    isMobile, categories,
    category() {
      return UIKIT.category(this.title, this.selected);
    }
  });
};

export default categories;

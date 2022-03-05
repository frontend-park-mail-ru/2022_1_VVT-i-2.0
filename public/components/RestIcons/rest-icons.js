import UIKIT from '../../ui-kit/import.js';

const restIcons = (restaurants) => {
    const template = `
        <div id="container">
            {{#restaurants}}
                <div class="rest_icon">
                    {{&iconImage}}
                    {{&metaInformation}}
                </div>
            {{/restaurants}}
        </div>
    `;
    return Mustache.render(template, {
        restaurants: restaurants,
        iconImage() {
            return UIKIT.iconImage(this.imgPath, this.restName);
        },
        metaInformation() {
            return UIKIT.metaInformation(this.restName, this.timeToDeliver, this.price, this.rating);
        }
    });
};

export default restIcons;

import UIKIT from '../../ui-kit/import.js';

const orderPoint = (properties) => {
    const template = `
        <div class="order-point">
            <div>
                <img class="dish-img" src="{{properties.imgPath}}" alt="">
            </div>
            <div>
                <div class="dish-info">
                    <div>{{properties.dishName}}</div>
                    <div>{{properties.price}}</div>
                </div>
                <div class="ingredients">
                    {{properties.additives}}
                </div>
                <div class="edit-quantity">
                    {{&addButton}}
                    <div class="number-current-point">{{properties.count}}</div>
                    {{&removeButton}}
                </div>
            </div>
        </div>
    `;

    return Mustache.render(template, {
        properties: properties,
        addButton () {
            return UIKIT.addRemoveButton('addPoint');
        },
        removeButton () {
            return UIKIT.addRemoveButton('removePoint');
        }
    });
};

export default orderPoint;

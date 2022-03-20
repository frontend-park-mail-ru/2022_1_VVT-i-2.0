import UIKIT from '../../ui-kit/import.js';

const orderPoint = (imgPath, dishName, additives, count, price) => {
    const template = `
        <div class="order-point">
            <div>
                <img class="dish-img" src="{{imgPath}}" alt="">
            </div>
            <div>
                <div class="dish-info">
                    <div>{{dishName}}</div>
                    <div>{{price}}</div>
                </div>
                <div class="ingredients">
                    {{additives}}
                </div>
                <div class="edit-quantity">
                    {{&addButton}}
                    <div class="number-current-point">{{count}}</div>
                    {{&removeButton}}
                </div>
            </div>
        </div>
    `;

    return Mustache.render(template, {
        addButton () {
            return UIKIT.addRemoveButton('addPoint');
        },
        removeButton () {
            return UIKIT.addRemoveButton('removePoint');
        }
    });
};

export default orderPoint;

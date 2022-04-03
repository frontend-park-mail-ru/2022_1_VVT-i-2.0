import UIKIT from '../import.js';

const orderPoint = (imgPath, dishName, additives, dishCount, price) => {
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
                    <div class="number-current-point">{{dishCount}}</div>
                    {{&removeButton}}
                </div>
            </div>
        </div>
    `;

    return Mustache.render(template, {
        imgPath, dishName, additives, dishCount, price,
        addButton () {
            return UIKIT.addRemoveButton('addPoint');
        },
        removeButton () {
            return UIKIT.addRemoveButton('removePoint');
        }
    });
};

export default orderPoint;

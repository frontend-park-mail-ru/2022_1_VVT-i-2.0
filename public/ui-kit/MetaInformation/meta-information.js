const metaInf = (restName, timeToDeliver, price, rating) => {
    return `
        <div class="rest_meta_information_block">
            <div class="rest_name">
                ${restName}
            </div>
            <div class="meta_buttons_block">
                <div class="meta_stat">
                    <div class="parameters">
                        ${timeToDeliver}
                    </div>
                </div>
                <div class="meta_stat">
                    <div class="parameters">
                        ${price}
                    </div>
                </div>
                <div class="meta_stat">
                    <div class="parameters">
                        <img src="../../icons/star.svg" alt="rating">
                        ${rating}
                    </div>
                </div>
            </div>
        </div>
    `;
};

export default metaInf;

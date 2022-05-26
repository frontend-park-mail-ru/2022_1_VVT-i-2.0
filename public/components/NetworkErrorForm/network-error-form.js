const networkErrorForm = ({ header, text }) => {
  const template = `
            <section class="error-page">
                <div class="error-page__view">
                    <div class="view__text-content">
                        <h1 class="text-content__header">
                            {{header}}
                        </h1>
                        <div class="text-content__text_error">
                            {{text}}
                        </div>
                        <div>
                            <a class="text-content__button-to-main" href="main">на главную</a>
                        </div>
                    </div>

                    <div class="view__graphic-content">
                        <div class="graphic-content__img">
                            <img src="/graphics/images/godzilla.png" alt="">
                        </div>
                    </div>
                </div>
            </section>
        `;
  return Mustache.render(template, { header, text });
};

export default networkErrorForm;

const statusPreview = () => {
  const template = `
    <div class="status-preview">
      <div class="status-preview__preview">
        <div class="preview__img_in-processing"></div>
        <div class="preview__annotation">
            В обработке
        </div>
      </div>
      
      <div class="status-preview__preview">
        <div class="preview__img_cooking"></div>
        <div class="preview__annotation">
            Готовим
        </div>
      </div>
      
      <div class="status-preview__preview">
        <div class="preview__img_in-way"></div>
        <div class="preview__annotation">
            В пути
        </div>
      </div>
        
      <div class="status-preview__preview">
        <div class="preview__img_received"></div>
        <div class="preview__annotation">
            Получен
        </div>
      </div>
    </div>
  `;

  return Mustache.render(template, {});
};

export default statusPreview;

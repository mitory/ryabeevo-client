export const removeTitleAttributes = (selectors = ['.carousel__pagination-button', '.carousel__prev', '.carousel__next']) => {
  setTimeout(() => {
    selectors.forEach(selector => {
      const buttons = document.querySelectorAll(selector);
      buttons.forEach(button => button.removeAttribute('title'));
    });
  }, 1000);
};
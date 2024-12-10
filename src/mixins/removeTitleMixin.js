export default {
    methods: {
      removeTitleAttributes(selectors = ['.carousel__pagination-button', '.carousel__prev', '.carousel__next']) {
        selectors.forEach(selector => {
            const buttons = document.querySelectorAll(selector);
            buttons.forEach(button => button.removeAttribute('title'));
        })
        
      },
    },
  };
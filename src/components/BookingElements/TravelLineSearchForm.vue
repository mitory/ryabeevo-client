<script setup>
import calendarIcon from '../../assets/img/button_icon/calendar_end.svg';
import calendarIconStart from '../../assets/img/button_icon/calendar_start.svg';
import { onMounted } from 'vue';

onMounted(() => {
  (function (w) {
    var q = [
      ['setContext', 'TL-INT-ryabeevo-polyana', 'ru'],
      ['embed', 'search-form', {
        container: 'tl-search-form',
      }],
    ];
    var t = w.travelline = (w.travelline || {}),
      ti = t.integration = (t.integration || {});
    ti.__cq = ti.__cq ? ti.__cq.concat(q) : q;
    if (!ti.__loader) {
      ti.__loader = true;
      var d = w.document,
        p = d.location.protocol,
        s = d.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = (p == 'https:' ? p : 'http:') + '//ibe.tlintegration.com/integration/loader.js';
      (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
    }
  })(window);

  // Наблюдаем за добавлением <iframe> в DOM
  const container = document.querySelector('#tl-search-form');
  const observer = new MutationObserver(() => {
    const iframe = container.querySelector('iframe');
    if (iframe) {
        iframe.addEventListener('load', () => {
            if (iframe.contentDocument) {
                    const doc = iframe.contentDocument;

                     // Подключаем шрифты
                    const fontLink1 = doc.createElement('link');
                    fontLink1.rel = 'preconnect';
                    fontLink1.href = 'https://fonts.googleapis.com';

                    const fontLink2 = doc.createElement('link');
                    fontLink2.rel = 'preconnect';
                    fontLink2.href = 'https://fonts.gstatic.com';
                    fontLink2.crossOrigin = 'anonymous';

                    const fontLink3 = doc.createElement('link');
                    fontLink3.rel = 'stylesheet';
                    fontLink3.href =
                      'https://fonts.googleapis.com/css2?family=Lobster&family=PT+Sans+Caption:wght@400;700&display=swap';

                    doc.head.appendChild(fontLink1);
                    doc.head.appendChild(fontLink2);
                    doc.head.appendChild(fontLink3);
                    
                    // Добавляем стили
                    const style = doc.createElement('style');
                    style.textContent = `
                    * {
                      font-family: "PT Sans Caption", serif;
                    }
                    .sf-wrapper .sf-title-container {
                        display: none;
                    }
                    .sf-wrapper .sf-top-block-2 {
                        display: none;
                    }
                    .sf-wrapper input.sfl-date-control,
                    .sf-wrapper input.sfl-guests-input,
                    .sf-wrapper input.sfl-submit-button.sfl-submit-button-input.standard-view-button {
                        padding: 10px 16px 4px 24px;
                        border-radius: 20px;
                        background: rgb(0, 139, 69);
                        font-family: "PT Sans Caption", serif;
                        color: white;
                        font-size: 16px;
                        line-height: 18px;
                    }
                    .sf-wrapper input.sfl-submit-button.sfl-submit-button-input.standard-view-button {
                        padding: 9px 16px 9px 16px;
                        font-size: 17px;
                        font-weight: 400;
                        line-height: 22px;
                        letter-spacing: 0px;
                        text-transform: none;
                    }
                    .sf-wrapper input.sfl-submit-button.sfl-submit-button-input.standard-view-button:hover {
                        opacity: 0.9;    
                    }
                    .sfl-container .sf-field-label {
                        left: 24px;
                        top: 2px;
                    }
                    .sf-wrapper .sf-field-label {
                        color: rgb(85, 219, 145);
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 14px;
                        letter-spacing: 0px;
                        font-family: "PT Sans Caption", serif;
                    }
                    .sfl-container .sfl-guests-input-container:after {
                        display: none;
                    }
                    .sfl-container .sf-departure-date-container .sf-calendar-button {
                        background-image: url("${calendarIcon}");
                        margin-right: 16px;
                    }
                    .sfl-container .sf-arrival-date-container .sf-calendar-button {
                        background-image: url("${calendarIconStart}");
                        margin-right: 16px;
                    }

                    .sfl-container .sf-wrapper {
                        padding: 0;
                    }
                    .sf-state-quad .sf-controls-wrapper, .sf-state-quad1 .sf-controls-wrapper, .sf-state-quad2 .sf-controls-wrapper, .sf-state-vertical .sf-controls-wrapper {
                        margin-top: 0px;
                       } 
                    .sf-state-quad .sf-promo-code-container, .sf-state-quad .sf-submit-button-container, .sf-state-quad1 .sf-promo-code-container, .sf-state-quad1 .sf-submit-button-container, .sf-state-quad2 .sf-promo-code-container, .sf-state-quad2 .sf-submit-button-container, .sf-state-vertical .sf-promo-code-container, .sf-state-vertical .sf-submit-button-container {
                        margin-bottom: 0px;
                    }
                    `;
                    doc.head.appendChild(style);
                }
                });
      observer.disconnect(); // Останавливаем наблюдение
    }
  });

  observer.observe(container, { childList: true, subtree: true });
});
</script>

<template>
  <div id="tl-search-form" class="container search-form"></div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  (function(w) {
    var q = [
      ['setContext', 'TL-INT-ryabeevo-polyana', 'ru'],
      ['embed', 'booking-form', {
        container: 'tl-booking-form'
      }]
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
      s.src = (p === 'https:' ? p : 'http:') + '//ibe.tlintegration.com/integration/loader.js';
      (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
    }
  })(window);
});
</script>

<template>
  <div class="container">
    <div class="title-block">
        <h1 class="title-page">Бронирование</h1> 
        <div class="links-path">
            <router-link to="/">Главная</router-link>
            <div class="elips"></div>
            <div class="this-path">Бронирование</div>
        </div>
    </div>
  </div>   
  <div id="tl-booking-form" style="min-height: 400px;" class="container margin"></div>
</template>

<style scoped>
  .margin {
    margin: 16px auto;
  }
</style>

<template>
    <yandex-map
      :settings="{
        location: {
          center: [35.76, 56.83],
          zoom: !isMobile ? 12.5 : 11,
        },
      }"
      width="100%"
      height="400px"
  >
    <yandex-map-default-scheme-layer/>
    <yandex-map-default-features-layer/>
    <yandex-map-marker :settings="{coordinates: [35.703254, 56.824986]}">
      <div class="marker"/>
    </yandex-map-marker>
    <yandex-map-controls :settings="{ position: 'right' }">
        <yandex-map-zoom-control/>
        <yandex-map-geolocation-control/>
    </yandex-map-controls>
  </yandex-map>
</template>

<script>
import { 
    YandexMap, YandexMapDefaultSchemeLayer, 
    YandexMapDefaultFeaturesLayer, YandexMapMarker,
    YandexMapControls, YandexMapGeolocationControl, YandexMapZoomControl
} from 'vue-yandex-maps';
// import { YMapMarkerProps } from '@yandex/ymaps3-types/imperative/YMapMarker';

export default {
    data() {
        return {
            windowWidth: window.innerWidth,
        }
    },
    components: {
        YandexMap, YandexMapDefaultSchemeLayer, YandexMapMarker, YandexMapDefaultFeaturesLayer,
        YandexMapControls, YandexMapGeolocationControl, YandexMapZoomControl
    },
    computed: {
        isMobile() {
            return this.windowWidth < 760;
        },
    },
    mounted() {
        this.removeTitleAttributes();
        window.addEventListener('resize', this.onResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },
    updated() {
        this.removeTitleAttributes();
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth;
        },
    },
}
</script>

<style scoped>
    .marker {
        position: absolute;
        top: -66px;
        width: 52px;
        height: 66px;
        background-position: 0px 0px;
        background-size: 52px 66px;
        background-image: url('../../assets/img/ryab_logos/marker-for-map.png');
    }
</style>
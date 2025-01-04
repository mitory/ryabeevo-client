<template>
    <div class="d-flex">
      <div :id="recaptchaId" class="mx-auto g-recaptcha"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps({
    recaptchaId: {
      type: String,
      required: true
    }
  });
  
  const emit = defineEmits(['verified', 'error']);
  const sitekey = '6LeBpqUqAAAAAAdikpQLFWnd_Y4KXAK_kcp3iljF';
  let recaptchaInterval = null;
  let retryCount = ref(0); 
  
  function startRecaptchaWatcher() {
    recaptchaInterval = setInterval(() => {
      if (window.grecaptcha) {
        const recaptchaResponse = window.grecaptcha.getResponse();
        if (!recaptchaResponse) {
          emit('verified', null);
        }
      }
    }, 1000);
  }
  
  const recaptchaWidget = ref(null);

  function renderRecaptcha() {
    if (retryCount.value >= 3) {
      emit('error', 'Не удалось загрузить reCAPTCHA. Пожалуйста, попробуйте позже.');
      return; 
    }
  
    try {
      if (window.grecaptcha) {
       recaptchaWidget.value = window.grecaptcha.render(document.getElementById(props.recaptchaId), {
          sitekey,
          
          callback: verifyCallback
        });
        startRecaptchaWatcher();
      } else {
        retryCount.value += 1;
        setTimeout(renderRecaptcha, 1000); 
      }
    } catch (err) {
      retryCount.value += 1;
      setTimeout(renderRecaptcha, 1000); 
    }
  }

  const token = ref(null)
  
  function verifyCallback(response) {
    emit('verified', response);
    token.value = response;
  }
  
  function clearRecaptchaInterval() {
    if (recaptchaInterval) {
      clearInterval(recaptchaInterval);
      recaptchaInterval = null;
    }
  }

    function resetRecaptcha() {
        if (window.grecaptcha && recaptchaWidget.value !== null) {
            window.grecaptcha.reset(recaptchaWidget.value); 
            renderRecaptcha();
        }
    }

    defineExpose({
        resetRecaptcha
    });

  
  onMounted(() => {
    renderRecaptcha();
  });
  
  onUnmounted(() => {
    clearRecaptchaInterval();
  });
  </script>
  
  <style scoped>

  .d-flex {
    display: flex;
    justify-content: center;
  }

  .g-recaptcha {
    display: block;
  }
  </style>
  
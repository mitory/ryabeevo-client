<template>
    <div class="askform">
        <CloseButton />
        <div class="askform__wrapper">
            <h2 class="askform__title"> {{ props.title }}</h2>
            <form @submit.prevent="submitForm" class="form">
                <input
                    type="text"
                    class="form__input"
                    placeholder="ФИО"
                    :class="{'invalid': errors.fullname}"
                    v-model="formData.fullname"
                    @input="validateFullname"
                />
                <span v-if="errors.fullname" class="error-message">{{ errors.fullname }}</span>

                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>

                <input
                    v-if="fieldType === 'email'"
                    type="email"
                    class="form__input"
                    placeholder="Почта"
                    :class="{'invalid': errors.contact}"
                    v-model="formData.contact"
                />
                <input
                    v-if="fieldType === 'phone'"
                    type="text"
                    class="form__input"
                    placeholder="Телефон"
                    :class="{'invalid': errors.contact}"
                    v-model="formData.contact"
                    @input="validatePhone"
                    maxlength="12"
                />
                <span v-if="errors.contact" class="error-message">{{ errors.contact }}</span>

                <textarea
                    class="form__input"
                    placeholder="Ваш комментарий"
                    rows="10"
                    :class="{'invalid': errors.comment}"
                    v-model="formData.comment"
                ></textarea>

                <RecaptchaGoodle 
                    class="recaptcha"
                    :class="{'invalid': errors.recaptcha}"
                    @verified="onRecaptchaVerified" 
                    ref="recaptchaRef" recaptchaId="recaptcha-container"
                />

                <button 
                    class="form__button" 
                    :class="{'preload': preload}"
                    :disabled="preload"
                    >{{ !preload ? 'Отправить': 'Отправляем...'}}
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import CloseButton from './MiniComponents/CloseButton.vue';
import { ref } from 'vue';
import RecaptchaGoodle from './MiniComponents/Recaptcha.vue';

const preload = ref(false)
const recaptchaRef = ref(null);

function refreshCaptcha() {
    if (recaptchaRef.value) {
        recaptchaRef.value.resetRecaptcha(); 
    }
}


const props = defineProps({
    fieldType: {
        type: String,
        default: 'email',
    },
    onSubmit: {
        type: Function,
        required: true,
    },
    title: String
});

const formData = ref({
    fullname: '',
    contact: '',
    comment: '',
    recaptcha: null
});

const errors = ref({
    fullname: '',
    contact: '',
    comment: '',
    recaptcha: ''
});

function onRecaptchaVerified (verifiedToken) {
  formData.value.recaptcha = verifiedToken;
};

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = () => {
    if (!formData.value.contact.startsWith('+7')) {
        if (formData.value.contact.length <= 2) {
            formData.value.contact = '+7'
        } else {
            formData.value.contact = '+7' + formData.value.contact
        }
        
    }
    formData.value.contact = formData.value.contact.replace(/[^0-9+\s]/g, '');
    if (formData.value.contact.length > 12) {
        formData.value.contact = formData.value.contact.slice(0, 12);
    }
};
const validateFullname = () => {
    formData.value.fullname = formData.value.fullname.replace(/[^а-яА-Я\s-]/g, '');
};

const submitForm  = async () => {
    errors.value = {
        fullname: '',
        email: '',
        comment: '',
        recaptcha: ''
    };

    formData.value.fullname = formData.value.fullname.trim();
    formData.value.contact = formData.value.contact.trim();
    formData.value.comment = formData.value.comment.trim();

    if (!formData.value.fullname || formData.value.fullname.length < 5) {
        errors.value.fullname = 'Пожалуйста, введите ваше ФИО.';
    }

    
    if (props.fieldType === 'email') {
        if (!formData.value.contact) {
            errors.value.contact = 'Пожалуйста, введите вашу почту.';
        } else if (!validateEmail(formData.value.contact)) {
            errors.value.contact = 'Введите корректный адрес электронной почты.';
        }
    } 
    if (props.fieldType === 'phone') {
        if (!formData.value.contact || formData.value.contact.length < 10) {
            errors.value.contact = 'Введите корректный номер телефона.';
        }
    }

    if (!formData.value.comment || formData.value.comment.length < 10) {
        errors.value.comment = true;
    }

    if (!formData.value.recaptcha) {
        errors.value.recaptcha = true;
    }

    if (Object.values(errors.value).some((error) => error)) {
        if (formData.value.recaptcha) {
            formData.value.recaptcha = null;
            refreshCaptcha();
        }
        return;
    }

    preload.value = true;
    const success = await props.onSubmit({ ...formData.value });
    preload.value = false;

    if(success) {
        formData.value.fullname = ''
        formData.value.contact = ''
        formData.value.comment = ''
    }
    formData.value.recaptcha = null;
    refreshCaptcha();

};
</script>

<style scoped>

.recaptcha.invalid {
    border: 2px solid rgba(183, 32, 32, 0.793);
}

.askform__title {
    color: var(--white-color);
    text-align: center;
    font-size: 20px;
    margin-top: 16px;
    font-weight: 700;
}

button.preload:after {
	content: '';
	position: absolute;
	top: calc(50% - 12.5px);
	right: 5px;
	width: 25px;
	height: 25px;
	border: 5px solid #FFF;
	border-bottom-color: var(--green-color);
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;
}

@keyframes rotation {
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
} 

button:disabled:hover,
button[disabled]:hover {
	cursor: default;
    opacity: 1;
}



/* -------------------------------------- */


    .form__input.invalid {
        border: 2px solid rgba(183, 32, 32, 0.793);
    }
    .error-message {
        color: rgba(183, 32, 32, 0.793);
        font-size: 14;
        font-weight: 700;
        letter-spacing: 1px;
        margin-top: 2px;
        text-align: center;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        padding: 0 16px;
        margin: 16px 0 32px 0;
    }

    .form__input {
        border: 2px solid var(--green-light);
        border-radius: 20px;
        padding: 9px 16px;
        color: var(--green-color);
        font-size: 14px;
    }

    textarea {
        resize: vertical;
        max-height: 250px
    }

    .form__button {
        padding: 9px 16px;
        font-size: 17px;
        line-height: 22px;
        color: var(--green-color);
        border-radius: 20px;
        border: 2px solid var(--green-light);
        background: var(--white-color);
        position: relative;
    }

/* ----------------------- */
    .askform {
        position: fixed;
        top: 2%;
        left: calc(50% - 160px);
        width: 320px;
        background: var(--green-color);
        z-index: 15;
        display: none;
        border: 2px solid var(--green-light);
        border-radius: 20px;
        box-shadow: 0 0 20px rgba(85, 219, 145, 0.5);
        justify-content: center;
        align-items: center;
    }

    .askform.show {
        display: flex;
    }
</style>
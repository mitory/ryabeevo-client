<template>
    <div class="psevdo-header"></div>
	<div class="mobile-header__wrapper">
		<header>
			<div class="bird_logo"></div>
			<div class="header__content">
				<Adress class="header__addres"/>
				<div class="header__logo-name-wrapper">
                    <router-link to="/">
                        <img src="../assets/img/ryab_logos/logo_name.svg" alt="Логотип" class="header__logo-name"/>
                    </router-link>
				</div>
				<div class="header__connection">
					<div class="header__contacts">
                        <Tels class="header__tels" />
                        <Adress class="header__address-mobile"/>
                        <Mails class="header__mails" />
					</div>
					<div class="header__callback-buttons">
						<button class="callback-button">
							<img src="../assets/img/button_icon/callback.svg" alt="">
							<p>Заказать звонок</p>
						</button>
						<button class="callback-button">
							<img src="../assets/img/button_icon/write_letter.svg" alt="">
							<p>Написать нам</p>
						</button>
					</div>
				</div>
			</div>
		</header>
		<NavElement />
	</div>
</template>

<script setup>
import Adress from './Contacts/Adress.vue';
import Tels from './Contacts/Tels.vue';
import Mails from './Contacts/Mails.vue';
import NavElement from './Nav/NavElement.vue';


</script>

<style>
    header {
        position: relative;
    }

    .header__content {
        padding: 16px 32px 16px 0;
        margin-left: calc(21px + 54px + 41px);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .bird_logo {
        position: absolute;
        background: url('../assets/img/ryab_logos/logo_bird.svg') center / cover no-repeat;
        top: 32px;
        left: 41px;
        width: 54px;
        height: 92px;
        z-index: 1;
    }

    .header__addres a {
        font-size: 12px;
        line-height: 12px;
    }

    .header__connection {
        display: flex;
        gap: 16px;
    }

    .header__contacts {
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    .header__tels {
        display: flex;
        flex-direction: column;
    }

    .header__tels a {
        font-size: 14px;
        font-weight: 700;
        line-height: 18px;
    }

    .header__mails a {
        font-size: 14px;
        line-height: 18px;
    }

    .header__callback-buttons {
        display: flex;
        flex-direction: column;
        gap: 9px;
    }

    .callback-button {
        display: flex;
        gap: 4.6px;
        align-items: center;
        background: none;
    }

    .callback-button p {
        font-size: 11px;
        font-weight: 400;
        line-height: 14px;
    }

    .header__address-mobile {
        display: none;
    }


    @media (max-width: 1100px) {
        .callback-button p {
            display: none;
        }
    }

    @media (max-width: 992px) {
        .bird_logo {
            left: 21px;
        }
        .header__addres {
            display: none;
        }
        .header__address-mobile {
            display: block;
            font-size: 10px;
            line-height: 13px;
        }
        .header__address-mobile a {
            font-size: 10px;
            line-height: 13px;
        }
        .header__connection {
            flex-direction: row-reverse;
            gap: 10.6px;
        }
        .header__contacts {
            align-items: start;
        }
        .header__content {
            padding: 8.5px 16px 8.5px 0;
            margin-left: calc(21px + 54px + 27px);
        }
    }

    @media (max-width: 760px) {
        .header__logo-name-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            text-align: center;
            background-color: #55DB911A;
            padding: 8px 0;
        }
        .header__logo-name {
            width: 331px;
            height: 57px;
        }
        .header__connection {
            margin-top: 73px;
        }
        .bird_logo {
            top: calc(32px + 63px);
            left: 17px;
            width: 60px;
            height: 102px;
        }
        .header__connection {
            flex-direction: row;
            gap: 10px;
            justify-content: space-between;
            align-items: center;
        }
        .header__content {
            padding: 12px 16px 7px 0;
            margin-left: calc(17px + 60px + 11px);
        }
        .mobile-header__wrapper {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 5;
            background-color: var(--white-color);
            width: 100%;
        }
        .psevdo-header {
            height: 228px;
        }
}

</style>
<template>
    <footer>
		<router-link to="/" class="birdlink">
			<div class="footer__bird-logo"></div>
        </router-link>
		<div class="footer__content">
			<div class="footer__address">
                <router-link to="/">
                    <img src="../assets/img/ryab_logos/logo_name__footer.svg" alt="Логотип"/>
                </router-link>
				<Adress />
			</div>

			<NavList class="footer__nav"/>
			<div class="footer__contacts">
                <Tels class="footer__tels" :tels="$store.state.appData.contacts?.telFo" />
                <Mails class="footer__mails" />
                <SocialMedias class="footer__social-media" :collection="$store.state.appData.social?.footer" />
			</div>
		</div>
	</footer>
</template>

<script setup>
import Adress from './Contacts/Adress.vue';
import Tels from './Contacts/Tels.vue';
import Mails from './Contacts/Mails.vue';
import SocialMedias from './Contacts/SocialMedias.vue'
import NavList from './Nav/NavList.vue'
</script>

<style>
    footer {
	position: relative;
	background-color: var(--green-dark);
	padding: 32px;
}

.footer__content {
	margin-left: calc(37px + 16px);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.footer__address {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.footer__address a {
	color: var(--green-light);
	font-size: 10px;
	line-height: 13px;
}

.footer__nav {
	gap: 32px;
}

.footer__tels a, .footer__mails a {
	color: var(--white-color);

}

.footer__tels a {
	font-size: 20px;
	line-height: 26px;
}

.footer__mails a {
	font-size: 14px;
	line-height: 18px;
}

.footer__tels {
	display: flex;
	flex-direction: column;
}

.footer__mails {
	display: flex;
	flex-direction: column;
	margin-bottom: 3px;
}

.footer__social-medias {
	display: flex;
	gap: 10px;
}

.footer__bird-logo {
	position: absolute;
	background: url('../assets/img/ryab_logos/logo_bird.svg') center / cover no-repeat;
	top: 47.5px;
	left: 32px;
	width: 37px;
	height: 63px;
	z-index: 1;
}

@media (max-width: 1200px) {
	.footer__nav {
		display: none;
	}

}

@media (max-width: 760px) {
	.footer__content {
		flex-direction: column;
		gap: 17px;
		justify-content: start;
		align-items: start;
		margin-left: 0;
	}
	.footer__address {
		margin-left: calc(37px + 16px);
	}
	.footer__bird-logo {
		top: 16px;
	}
	footer {
		padding: 17px 32px;
	}
}
</style>
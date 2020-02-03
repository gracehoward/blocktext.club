<template>
	<div class="layout">
		<header class="header">
			<g-link to="/" class="glink">
				<!-- {{ $static.metadata.siteName }} -->
				BLOCK
				<br />
				TEXT.CLUB
			</g-link>
			<nav class="nav">
				<ToggleTheme />
			</nav>
		</header>
		<slot />
		<div class="footer"></div>
	</div>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
	components: {
		ToggleTheme
	}
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import "../assets/style/_variables.scss";

::-webkit-scrollbar {
	width: 0px;
	background: transparent;
	display: none;
}

::selection {
	color: var(--body-color);
	background: rgba(0, 255, 0, 0.8);
}

.header {
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--space) 0;
	height: var(--header-height);
	width: var(--header-width);
	font-size: var(--title-font-size);
	font-weight: 400;

	a {
		border-bottom: 0;
	}

	.glink {
		font-size: var(--header-font-size);
	}

	nav {
		margin-right: var(--nav-margin-right);
	}
}

@media screen and (max-width: $small) {
	.header {
		padding: 1.75em 0 1.5em 0;
		background-color: var(--bg-color);
	}
}
</style>

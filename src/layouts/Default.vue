<template>
	<div class="layout">
		<header class="header">
			<g-link to="/" class="glink">
				<!-- {{ $static.metadata.siteName }} -->
				BLOCK
				<br />
				TEXT.CLUB
			</g-link>

			<!-- <h3 class="site-description"> -->
			<!-- 	<strong>A small blog</strong> of thoughts that exceed 280 -->
			<!-- 	characters, -->
			<!-- 	<br /> -->
			<!-- 	an exercise in self-publishing on the web. -->
			<!-- </h3> -->
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
::-webkit-scrollbar {
	width: 0px;
	background: transparent;
}

.header {
	position: fixed;
	top: 0;
	width: var(--header-width);
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: var(--space) 0;
	height: 1em;
	font-size: var(--title-font-size);
	font-weight: 400;

	a {
		border-bottom: 0;
	}

	.glink {
		font-size: var(--header-font-size);
	}
}

site-description {
	width: 30vw;
}
</style>

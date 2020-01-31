<template>
	<div class="post-card">
		<g-link :to="post.path" class="glink">
			<div class="post-card__header">
				<h1 class="post-card__title" v-html="post.title" />
			</div>

			<h3
				class="post-card__tags"
				v-for="tag in post.tags"
				:key="tag.id"
				:to="tag.path"
			>
				{{ tag.title }}
			</h3>

			<h2 class="post-card__date" v-html="post.date" />
		</g-link>
		<!-- <g-link :to="post.path" class="read">➜</g-link> -->
	</div>
</template>

<script>
import PostTags from "~/components/PostTags";

export default {
	components: {
		PostTags
	},
	props: ["post"]
};
</script>

<style lang="scss">
.post-card {
	&__header {
		min-height: var(--header-height);
		max-height: var(--header-height);
	}

	&__title {
		font-family: "Cirka-Light";
		text-transform: uppercase;
	}

	&__tags {
		padding: 2em 0;
	}

	&__date {
		font-family: "Cirka-Light";
	}

	&__description {
		margin-top: var(--paragraph-height);
	}

	.glink {
		border-bottom: 0;
		&:hover {
			color: var(--link-color);
			transform: translateY(5px);
			transition: transform 0.5s;
		}
	}
}
</style>

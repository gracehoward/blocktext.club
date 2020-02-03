<template>
	<Layout>
		<vue-read-progress
			color="var(--progress-bar-color)"
			opacity="1"
			height="var(--progress-bar-height)"
			:shadow="false"
		></vue-read-progress>

		<div class="post-page">
			<div class="post-card__header">
				<h1 class="post-card__title">
					{{ $page.post.title }}
				</h1>
				<h2 class="post-card__date">
					{{ $page.post.date }}
				</h2>
			</div>

			<!-- <hr /> -->
			<br />
			<div class="post-content">
				<h3 class="post-card__description">
					{{ $page.post.description }}
				</h3>
				<p v-html="$page.post.content" />
			</div>

			<!-- TODO: Links to previous and next posts -->
		</div>
	</Layout>
</template>

<page-query>
query Post ($path: String!) {
    post: post (path: $path) {
        id
        title
        description
        content
        date (format: "DD MMM YYYY")
    }
}
</page-query>

<script>
import PostTags from "@/components/PostTags.vue";
import VueReadProgress from "@/components/VueReadProgress.vue";

export default {
	components: {
		PostTags,
		VueReadProgress
	},
	props: ["post"]
};
</script>

<style lang="scss">
@import "../assets/style/_variables.scss";

hr {
	border-top: 1px solid var(--body-color);
	border-bottom: 0;
}

.post-page {
	margin: var(--post-margin);
	padding: var(--post-padding);

	.post-card__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid var(--body-color);
		padding: var(--post-card-header-padding);

		&__title,
		&__date {
			flex: 1;
		}

		&__title {
			text-align: center;
		}

		&__date {
			text-align: right;
		}
	}
}

.post-content {
	margin: 0 auto;
	border: 1px solid var(--body-color);
	padding: var(--post-content-padding);
	// margin-top: 16px;

	h1 {
		font-size: var(--desc-font-size);
	}

	p {
		margin-top: var(--paragraph-height);
		line-height: var(--paragraph-line-height);
	}

	img {
		display: block;
		margin: auto;
		//border: 1px solid var(--body-color);
		padding: 1em;
		width: 70%;
	}

	.post-card__description {
		padding: var(--post-description-padding);
		text-align: center;
		font-weight: 400;
		text-transform: uppercase;
	}
}
</style>

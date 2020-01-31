<template>
	<Layout>
		<div class="scrolling-wrapper-posts">
			<div class="posts">
				<PostCard
					class="post-index"
					v-for="edge in $page.allPost.edges"
					:key="edge.node.id"
					:post="edge.node"
				/>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query {
  allPost(filter: { published: { eq: true }}) {
    totalCount
    edges {
      node {
        id
        title
        date (format: "DD MMM YYYY")
        description
        excerpt
        path
        tags {
          id
          title
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "~/components/PostCard.vue";

export default {
	components: {
		PostCard
	},
	metaInfo: {
		title: ""
	},
	mounted() {
		// gist.github.com/vielhuber
		document.addEventListener("wheel", (e) => {
			if (e.type != "wheel") {
				return;
			}
			let delta = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1;
			delta = delta * -300;
			document.documentElement.scrollLeft -= delta;
			document.body.scrollLeft -= delta;
			//e.preventDefault();
		});
	}
};
</script>

<style lang="scss">
@import "../assets/style/_variables.scss";

/*.scrolling-wrapper-posts {
	display: flex;
	flex-wrap: nowrap;
	overflow-x: auto;
}*/

.posts {
	padding: 4.3em 0 0 0;
	display: flex;

	.post-index {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid var(--body-color);
		padding: var(--post-card-padding);
		margin: var(--post-card-margin);
		max-width: var(--post-card-width);
		min-width: var(--post-card-width);
		min-height: var(--post-card-height);
		transition: 0.2s;

		&:hover {
			border: 1px solid var(--link-color);
			border-radius: 2em;
		}
	}
}

@media screen and (max-width: $small) {
	.posts {
		/*display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-content: center;*/
		padding: 5em 0;
		.post-index {
			margin: 5em 2em 0 0;
			max-width: 10em;
			min-width: 10em;
			min-height: 23em;
		}
	}
}
</style>

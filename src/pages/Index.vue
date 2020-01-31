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
			e.preventDefault();
		});
	}
};
</script>

<style lang="scss">
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
		flex: 0 0 auto;
		flex-direction: column;
		border: 1px solid var(--body-color);
		padding: 2em 1.5em 0 1.5em;
		margin: 1em 2em 0 0;
		max-width: 9em;
		min-width: 9em;
		min-height: 20em;
		transition: 0.2s;

		&:hover {
			border: 1px solid var(--link-color);
			border-radius: 2em;
		}
	}
}
</style>

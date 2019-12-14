<template>
    <Layout>
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
        <!-- List of posts -->
        <div class="posts">
            <PostCard
                v-for="edge in $page.allPost.edges"
                :key="edge.node.id"
                :post="edge.node"
            />
        </div>
    </Layout>
</template>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        date (format: "DD MMM YYYY")
        description
        path
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
    }
};
</script>

<style lang="scss"></style>

<template>
    <Layout>
        {{ $page.tag.title }}
    </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
          }
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
    }
};
</script>

<style lang="scss"></style>

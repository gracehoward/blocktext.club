<template>
    <Layout>
        <hr class="line" />
        <div class="post-card__header">
            <h1 class="post-card__title">
                {{ $page.post.title }}
            </h1>
            <PostTags class="post-card__tags" />
            <h2 class="post-card__date">
                {{ $page.post.date }}
            </h2>
        </div>
        <hr class="line" />

        <div class="post-content">
            <p v-html="$page.post.content" />
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
import PostTags from "~/components/PostTags";

export default {
    components: {
        PostTags
    },
    props: ["post"]
};
</script>

<style lang="scss">
.post-content {
    p {
        margin-bottom: 30px;
    }
}
</style>

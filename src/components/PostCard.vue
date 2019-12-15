<template>
    <div class="post-card">
        <hr class="line" />
        <g-link :to="post.path" class="glink">
            <div class="post-card__header">
                <h1 class="post-card__title" v-html="post.title" />
                <PostTags class="post-card__tags" :post="post" />
                <h2 class="post-card__date" v-html="post.date" />
            </div>
            <hr class="line" />

            <p class="post-card__description" v-html="post.description" />
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
    &:hover {
        color: var(--link-color);
        transform: translateY(-5px);
        transition: transform 0.3s;

        hr {
            border-top: 1px solid var(--link-color);
        }
    }
}
</style>

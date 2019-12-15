<template>
    <div class="post-tags">
        <h3
            class="post-tags__title"
            v-for="tag in post.tags"
            :key="tag.id"
            :to="tag.path"
        >
            {{ tag.title }}
        </h3>
    </div>
</template>

<script>
export default {
    props: ["post"]
};
</script>

<style lang="scss"></style>

<template>
    <div class="post-card">
        <hr class="line" />
        <g-link :to="post.path" class="glink">
            <div class="post-card__header">
                <h1 class="post-card__title" v-html="post.title" />
                <h3 class="post-card__description" v-html="post.description" />
                <h2 class="post-card__date" v-html="post.date" />
            </div>
            <hr class="line" />
            <p class="post-card__excerpt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Molestie at elementum eu facilisis sed odio morbi. Eu facilisis
                sed odio morbi quis commodo odio aenean. Tincidunt augue
                interdum velit euismod in pellentesque massa placerat duis. Arcu
                dui vivamus arcu felis bibendum ut tristique. Semper eget duis
                at tellus at. Lorem ipsum dolor sit amet. Libero volutpat sed
                cras ornare arcu. Tortor pretium viverra suspendisse potenti
                nullam. Tortor aliquam nulla facilisi cras fermentum. Vulputate
                sapien nec sagittis aliquam malesuada. Elit sed vulputate mi sit
                amet mauris commodo quis imperdiet. Feugiat scelerisque varius
                morbi enim nunc faucibus.
            </p>
        </g-link>
        <!-- <g-link :to="post.path" class="read">➜</g-link> -->
    </div>
</template>

<script>
export default {
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

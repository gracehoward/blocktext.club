<template>
    <Layout>
        <!-- <h1>Info</h1> -->
        <hr class="line" />
        <p>
            A small blog of thoughts that exceed 280 characters, an exercise in
            self-publishing on the web.
        </p>
        <p>
            Built with Gridsome, powered by Vue, and deployed to ZEIT Now.
            Typeset in Neue Haas Unica and Cirka.
        </p>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: "Info"
    }
};
</script>

<style lang="scss">
p {
    margin: 20px 0;
}
</style>

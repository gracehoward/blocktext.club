<template>
    <Layout>
        <!-- <h1>Info</h1> -->
        <hr class="line" />
        <p>
            A small blog of thoughts that exceed 280 characters, an exercise in
            self-publishing on the web.
        </p>
        <p>
            Built with <a href="https://gridsome.org/">Gridsome</a>, powered by
            <a href="https://vuejs.org/">Vue</a>, and deployed with
            <a href="https://zeit.co/">ZEIT Now</a>. Typeset in
            <a href="https://www.monotype.com/fonts/neue-haas-unica/">
                Neue Haas Unica
            </a>
            and <a href="https://www.nicklosacco.com/cirka">Cirka</a>.
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

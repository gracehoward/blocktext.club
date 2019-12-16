<template>
    <div class="layout">
        <header class="header">
            <strong>
                <g-link to="/" class="glink"
                    >{{ $static.metadata.siteName }}
                </g-link>
                <span class="empty-space"></span>
                <g-link class="glink" to="/info/">info</g-link>
            </strong>

            <h3 class="site-description"></h3>
            <nav class="nav">
                <ToggleTheme />
            </nav>
        </header>
        <slot />
        <div class="footer"></div>
    </div>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
    components: {
        ToggleTheme
    }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.empty-space {
    margin: 0 10px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: var(--space) 0;
    height: 10px;
    font-size: var(--title-font-size);
    font-weight: 400;
}

// site-description {
//     width: 30vw;
// }

// .footer {
//     display: inline-block;
//     align-items: right;
//     justify-content: right;
//     text-align: right;
//     height: 50px;
// }
</style>

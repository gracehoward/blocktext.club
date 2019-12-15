<template>
    <div class="layout">
        <header class="header">
            <strong>
                <g-link to="/" class="glink">{{
                    $static.metadata.siteName
                }}</g-link>
            </strong>
            <h3 class="site-description"></h3>
            <nav class="nav">
                <g-link class="glink" to="/info/">/info</g-link>
            </nav>
        </header>
        <slot />
        <div class="footer"></div>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: var(--space) 0;
    height: 20px;
    font-size: var(--title-font-size);
    font-weight: 400;
}

site-description {
    width: 30vw;
}
</style>

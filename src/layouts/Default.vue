<template>
    <div class="layout">
        <header class="header">
            <strong>
                <g-link to="/">{{ $static.metadata.siteName }}</g-link>
            </strong>
            <h3 class="site-description"></h3>
            <nav class="nav">
                <g-link class="nav__link" to="/info/">/info</g-link>
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
// body {
//     margin: 0;
//     padding: 0;
//     line-height: 1.5;
// }

// .layout {
//     max-width: 760px;
//     margin: 0 auto;
//     padding-left: 20px;
//     padding-right: 20px;
// }

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

.nav__link {
    margin-left: 20px;
}
</style>

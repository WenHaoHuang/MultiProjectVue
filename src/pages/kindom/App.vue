<template>
    <div id="app" class="wrapper-flex">
        <header-bar></header-bar>
        <router-view/>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import headerBar from 'assets/components/headerBar.vue'
    import footerBar from 'assets/components/footerBar.vue'

    export default {
        name: 'App',
        components: {
            headerBar,footerBar
        }
    }
</script>

<style lang="scss">
    @import "~assets/css/style";
</style>

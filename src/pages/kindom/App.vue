<template>
    <div id="app">
        <header-bar></header-bar>
        <router-view/>
    </div>
</template>

<script>
    import headerBar from 'assets/components/headerBar.vue'

    export default {
        name: 'App',
        components: {
            headerBar
        }
    }
</script>

<style lang="scss">
    @import "~assets/css/style";
</style>

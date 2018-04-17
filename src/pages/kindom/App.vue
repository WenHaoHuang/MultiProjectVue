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
        },
        created() {
            this.set();
            window.onresize = () => {
                this.set();
            }
        },
        methods: {
            set() {
                const width = document.documentElement.clientWidth;
                const discount = 750 / 100;
                const fontSize = width / discount;
                document.documentElement.style.fontSize = fontSize + 'px';
            }
        }
    }
</script>

<style lang="scss">
    @import "~assets/css/style";
</style>

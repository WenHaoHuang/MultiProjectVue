<template>
    <div id="header">
        <div class="header">
            <a href="#/index" id="logo" class="logo"></a>
            <div class="item-register">立即开户</div>
            <div class="item-login">用户登录</div>
            <div class="nav" :class="{'active':isActive}">
                <div class="icon-menu" @click="isActive = !isActive"></div>
                <div class="list-menu">
                    <a href="#/index" class="item">首页</a>
                    <a href="#/index" class="item">关于我们</a>
                    <a href="#/index" class="item">产品介绍</a>
                    <a href="#/index" class="item">数据中心</a>
                    <a href="#/index" class="item">投资学院</a>
                    <a href="#/index" class="item">MT4下载</a>
                    <a href="#/index" class="item">联系我们</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-bar",
        data(){
            return {
                isActive:false
            }
        }
    }
</script>

<style lang="scss">
    #header{
        height: 0.8rem;
        width:100%;
    }
    .header {
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
        height: 0.8rem;
        width:100%;
        background-color: #191919;
        /*padding-right:2.06rem;*/
        text-align:right;
        padding:0 2.06rem 0 2rem;
        display:flex;
        flex-direction:row;
        justify-content: space-around;
        align-items: center;
        .nav{
            position:absolute;
            z-index:2;
            right:0;top:0;
            width:2.06rem;
            height:0.8rem;
            text-align:center;
            .icon-menu{
                position:relative;
                width:2.06rem;
                height:0.8rem;
                background:transparent url("~assets/img/icon-menu.png") scroll 1.56rem center no-repeat;
                background-size:0.3rem 0.22rem;
            }
            .list-menu{
                position:absolute;
                z-index:2;
                left:0;top:0.8rem;
                width:100%;
                background-color: #191919;
                padding:0.2rem 0;
                opacity:0;
                visibility:hidden;
                transform:translateY(0.8rem);
                transition:all 0.3s;
                .item{
                    display:block;
                    color:#FFF;
                    height:0.6rem;
                    line-height:0.6rem;
                    border-bottom:0.02rem solid #191919;
                    &:hover{
                        background-color: #575332;
                        border-bottom-color:#d5aa44;
                    }
                }
            }
            &.active{
                .icon-menu{
                    background:transparent url("~assets/img/menu-close.png") scroll 1.56rem center no-repeat;
                    background-size:0.21rem 0.21rem;
                }
                .list-menu{
                    opacity:1;
                    visibility:visible;
                    transform:translateY(0);
                }
            }
        }
        .item-register,.item-login{
            position:relative;
            width:1.56rem;height:0.44rem;
            color:#FFF;
            line-height:0.44rem;
            background-color: #252525;
            text-align:center;
            border-radius:0.04rem;
            font-size:0.16rem;
            overflow:hidden;
            &:after{
                content:'';
                position:absolute;
                left:0;right:0;
                bottom:0;
                height:0.04rem;
            }
        }
        .item-register{
            &:after{
                background-color: #d01423;
            }
        }
        .item-login:after{
            background-color: #ce991a;
        }
    }

    #logo {
        position:absolute;
        z-index:2;
        left:0;top:0;
        width:2rem;
        height:1.17rem;
        background:transparent url("~assets/img/logo.png") scroll 0 0 no-repeat;
        background-size:100% auto;
    }
</style>
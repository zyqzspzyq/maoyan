<template>
    <footer class="foot-nav">
        <router-link
            tag="div"
            v-for = "item in types"
            :key = "item.id"
            :to = "item.path"
            active-class= "active"
        class="nav-footer-wraper ">
            <p class="p-picture"><i :class="item.style" class="iconfont"></i></p>
            <p class="p-word">{{item.title}}</P>
        </router-link>
    </footer>
</template>
<script>
export default {
    data (){
        return {
            types: [
                {id: 1, title: '电影', type: 'movies', path: '/home', style: 'icon-dianying'},
                {id: 2, title: '影院', type: 'cinema', path: '/cinema', style: 'icon-cinema'},
                {id: 3, title: '我的', type: 'my', path: '/my', style: 'icon-tubiaolunkuo-'}
            ],
            type: 'movies'
        }
    }
}
</script>
<style lang="scss">
    .foot-nav{
        border-top: .5px solid #d8d8d8;
        position: fixed;
        bottom: 0;
        width:100%;
        background: #ffffff;
        display: flex;
        justify-content: space-around;
        .nav-footer-wraper{
            float:left;
            width:125px;
            height:48px;
            position: relative;
            text-align: center;
            .p-picture{
                height:36px;
                line-height: 36px;
            }
            .p-word{
                height:12px;
                font-size: 10px;
                line-height: 6px;
            }
            
        }
        .active{
            color:red;
        }
    }
</style>


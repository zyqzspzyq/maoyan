<template>
    <header class="navbar">
        <div class="nav-back">
            <a v-if= "is" @click="goBack" href="#">
                <i class="fa fa-angle-left"></i>
                
            </a>
        </div>
            <h1 class="nav-header">{{title}}</h1>

    </header>
</template>

<script>

export default {
    data() {
        return {
            is: false,
            title: '猫眼电影'
        }
    },
    created (){
        this.title = this.createTitle()
        this.$router.beforeEach((to,from,next) => {
            //改变标题
            this.title = this.createTitle(to)
            
            next()
        })
       
       
    },
    methods: {
        createTitle(to) {
            
            let _to = to || this.$route
            switch (_to.name) {
                case 'movie': return '影院';
                case 'my': return '我的';
                case 'detail': this.is = true; return _to.query.name;   //使back出现
                default: return '猫眼电影'

            }
        },
        //返回上一路由的方法
        goBack() {
            this.$router.back()
            //是back按钮消失
            this.is = false
        }
    }
}
</script>

<style lang="scss">
    @import '../../stylesheets/particles/variable';

    .navbar{
        
        background: $base-bg-color;
        display:-webkit-box;
        z-index: 99;
        top: 0;
        left: 0;
        right: 0;
        width:auto;
        height: 50.5px;
        .nav-back{
            width:50px;
            height:50px;
            line-height: 50px;
            display: block;
            a{
                color:white;
                font-size: 40px;
                padding-left: 10px;
                font-weight: 100;
            }
        }
        .nav-header{
            width:auto;
            display: block;
            -webkit-box-flex: 1;
            font-size: 18px;
            font-weight: 400;
            text-align: center;
            margin: 0 52.5px 0 0 ;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color:white;
            line-height: 50px;
        }
    }
</style>



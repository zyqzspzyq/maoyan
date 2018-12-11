<template>
    <section class="app-home">
        <div class="home-nav">
            <router-link tag="div" :to="{name:'city'}" class="city"><span>北京</span><i class="fa fa-sort-desc" aria-hidden="true"></i></router-link>
            <div class="hot-soon">
                <router-link 
                    tag = "div" 
                    v-for = "item in types"
                    :key = "item.id"
                    :to = "item.path"
                    active-class = "active" 
                class="hot-soon-same">
                    <div>{{item.title}}</div>
                </router-link>
            </div>
            <div class="search"><i class="fa fa-search fa-lg" aria-hidden="true"></i></div>
        </div>
        <div class="movie-page">
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </section>
</template>
<script>
import AppFooter from '@components/layout/AppFooter'

export default {
    name: 'app-home',
    data () {
        return {
            types: [
                {id: 1, title: '正在热映', type: 'hot', path: 'hot', },
                {id: 2, title: '即将上映', type: 'soon', path: 'soon', }
            ],
                
        }
    },
    components: {
        AppFooter,  
    }
    
};
</script>
<style lang="scss">
    .home-nav{
        display: flex;
        -webkit-box-align:center;
        align-items: center;
        height:44px;
        -webkit-box-pack: justify;
        justify-content: space-between;
        border-bottom: #e6e6e6 solid 1px;
        .city{
            height:20px;
            width:62px;
            padding-left: 15px;
            font-size: 15px;
            color:#666;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            span{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: 19.2vw;
            }
            i{
                color: #b0b0b0;
                
            }
        }
        .hot-soon{
            display: flex;
            height:44px;
            width:207px;
            line-height: 44px;
            position: relative;
            color: #777;
            .hot-soon-same{
                font-size: 15px;
                width:21.3vw;
                text-align: center;
                margin: 0 12px;
                font-weight: 700;
            }
            .active{
                color:red;
                border-bottom: 2px solid red;
            }
        }
        .search{
            width:40px;
            line-height: 44px;
            i{
                color: red
            }
        }
        
    }
</style>


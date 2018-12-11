<template>
    <section  class="app-citys">
        <section>
            
        </section>
        <section>
           
        </section>
        <section>
           
        </section>
        <section>
           <mt-index-list>
               <div class="locate">
                定位城市
            </div>
            <div class="city-list">
                <div class="city-item">北京</div>
            </div>

             <div class="locate">
                最近访问城市
            </div>
            <div class="city-list">
                <div class="city-item">北京</div>
                <div class="city-item">重庆</div>
                <div class="city-item">成都</div>
            </div>

             <div class="locate">
                热门城市
            </div>
            <div class="city-list">
                <div class="city-item">北京</div>
            </div>

               <mt-index-section
                    v-for = "(value, key) in cities"
                    :key = "key"
                    :index = "key"
               >
                    <mt-cell 
                        id="hhh"
                        v-for = "city in value"
                        :key = "city.id"
                        :title = "city.name"
                    ></mt-cell>
               </mt-index-section>
           </mt-index-list>
        </section>
    </section>
    
</template>
<script>
import {IndexList, IndexSection, Cell} from 'mint-ui';

export default {
    components: {
        [IndexList.name]: IndexList,
        [IndexSection.name]: IndexSection,
        [Cell.name]: Cell
    },
   
    async beforeCreate() {
        let result = await this.$http({
            url: '/mz/v4/api/city'
        })
        this.citys = result.data.data.cities
         console.log(this.$util.cities(this.citys))
        
    },
     data() {
        return{
            citys: []
        }
    },
    computed: {
        cities (){
           
            return this.$util.cities(this.citys)
        }
    },
   
    
}
</script>
<style lang="scss">
    .app-citys{
        background-color: #ebebeb;
        font-size: 14px;
        color: #333;
        top: 0;
        bottom: 0;
        height: 100%;
        width:100%;
        position: absolute;
        z-index: 1000;
        overflow: auto;
        .locate{
            padding-left: 15px;
            line-height: 30px;

        }
        .city-list{
            overflow: hidden;
            background-color: #f5f5f5;
            padding-bottom: 8px;
            padding-right: 30px;
            .city-item{
                float:left;
                background-color: #fff;
                width:29%;
                height:33px;
                margin-top: 15px;
                margin-left: 4%;
                padding: 0 4px;
                border: 1px solid #e6e6e6;
                border-radius: 3px;
                line-height: 33px;
                text-align: center;
                box-sizing: border-box;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                display: block;
            }
        }
        .mint-indexlist{
            width:auto;
            .mint-indexlist-content{
                width:auto;
                .mint-indexsection{
                    width:auto;
                    ul{
                        width:auto;
                    }
                    .mint-cell-wrapper{
                        width:auto;
                        .mint-cell-title{
                            width:auto;
                            span{
                                width:32px;
                            }
                        }
                    }
                    #hhh {
                        width:auto;
                    }
                    span{
                        width:auto;
                    }
                }
                margin-right: 0;
                p{
                    background-color: #ebebeb;
                }
            }
            .mint-indexlist-nav{
                width:auto;
            }
        }
    }
</style>


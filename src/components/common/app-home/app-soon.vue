<template>
   <section class="app-soon">
       <div class="page-wrap">
           <div class="page-inner">
               <div class="tab-content">
                   <div class="list-wrap">
                       <div class="most-expected">
                           <p>近期最受期待</p>
                           <div class="most-expected-list">
                               <app-film-small 
                                    v-for = "item in expected_list"
                                    :key = "item.id"
                                    :info = "item"
                                ></app-film-small>
                           </div>
                       </div>
                       <div class="coming-list">
                           <soon-box 
                                v-for = "items in sss"
                                :key = "items.id"
                                :info = "items"
                           ></soon-box>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>
</template>
<script>
import AppFilmSmall from '@components/common/app-home/app-film-small'
import SoonBox from '@components/common/app-home/soon-box'
export default {
    components: {
        AppFilmSmall,
        SoonBox
    },
    data() {
        return {
            expected_list: [],
            coming_list: [],
            sss: []
        }
    },
    async created () {
        let result = await this.$http({
            url: '/my/ajax/mostExpected?ci=1&limit=10&offset=0&token='
        })
        //console.log(result.data.comming)
        this.expected_list = result.data.coming

        let com_result = await this.$http({
            url: '/my/ajax/comingList?ci=1&token=&limit=10'
        })
        this.coming_list = com_result.data.coming
       
        let getComing  = function(list){
            let arr = []
            let obj = {}
            list.forEach(item_out =>{
                if(obj['id'] == undefined){
                    obj['id'] = item_out.comingTitle
                    obj['content'] = ([item_out])                   
                } else if(obj['id'] == item_out.comingTitle){
                    obj['content'].push(item_out)
                }else{
                    arr.push(obj)
                    obj = {}
                    obj['id'] = item_out.comingTitle
                    obj['content'] = ([item_out])
                }

            })
            // list.forEach(item_out => {
                
            //     for (let k in obj){
            //         if(k == item_out.comingTitle){
            //            obj[item_out.comingTitle].push(item_out)

            //         }
            //     }
                
            // })
            return arr
        }
        this.sss= getComing(this.coming_list)
        
        

    }
}   
</script>

<style lang="scss">
    .app-soon{
        height:623px;
        overflow: hidden;
        position:absolute;
        width:100%;
        font-size: 14px;
        color:#777;
        .page-wrap{
            position: absolute;
            width:100%;
            height:100%;
            overflow: auto;
            .page-inner{
                height: 0!important;
                .tab-content{
                    position:absolute;
                    width:100%;
                    .list-wrap{
                        margin-top: 0;
                        background-color: #f5f5f5;
                        .most-expected{
                            padding:12px 0 12px 15px;
                            background-color: #fff;
                            margin-bottom: 10px;
                            p{
                                margin:0 0 12px;
                                font-size: 14px;
                                color:#333;
                            }
                            .most-expected-list{
                                overflow: scroll;
                                white-space:nowrap;
                                margin:0;
                                padding:0;
                                border: 0;
                                outline: 0;

                            }
                        }
                        .coming-list{
                            background: #fff;
                        }
                    }
                }
            }
        }
    }
</style>


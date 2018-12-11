<template>
    <div @click="goToDetail" class="app-item-wraper">
       <div class="item-inner">
           <div class="img-box">
               <div class="img-inner">
                   <img :src="info.img | jpg" alt="">
               </div>
           </div>
           <div class="item-container">
               <div class="item-content">
                   <div class="content-title">
                       <div class="word-inner">{{info.nm}}</div>

                   </div>
                   <div class="item-detail">
                       <div class="pingfen">
                           <span>观众评 </span><span class="score">{{info.sc}}</span>
                       </div>
                       <div class="star">主演：{{info.star}}</div>
                       <div class="show-info">{{info.showInfo}}</div>
                   </div>
               </div>
               <div class="button-block">
                   <div class="change-button" :class="colors"><span>{{buy}}</span></div>
               </div>
           </div>
       </div>


    </div>
</template>
<script>
export default {
    props: ['info'],
    data() {
        return {
            buy : ''
        }
    },
    computed: {
        colors: function (){
            if(this.info.globalReleased){
                this.buy = "购票"
                return 'red-bc';
            } else {
                this.buy = "预售"
                return 'blue-bc';
            }
        }
    },
    methods: {
        goToDetail() {
            this.$router.push({name: 'detail', params: {id: this.info.id}, query: {name: this.info.nm}})
        }
    }
}
</script>
<style lang="scss">
    .app-item-wraper{
        padding-left: 15px;
        background: #fff;
        display: block;
        height:114px;
        .item-inner{
            position: relative;
            width:100%;
            display: block;
            .img-box{
                width:64px;
                height:90px;
                position: relative;
                margin-top:12px;
                float:left;
                display:block;

            }
            .item-container{
                padding: 12px 14px 12px 0 ;
                margin-left: 74px;
                height:114px;
                width:263.5px;
                position: relative;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzhCNEEzQTE0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzhCNEEzQTA0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Mzg3REIwMzQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Mzg3REIwNDQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoL90/MAAAAZSURBVHjaYvr//z8DCLM8evToPwMQAAQYAGuLCaa37ZaAAAAAAElFTkSuQmCC) 0 bottom repeat-x;
                background-size: 1px 1px;
                .item-content{
                    width:210px;
                    padding-right:5px;
                    margin-right:48px;
                    overflow: hidden;
                    .content-title{
                        height:24px;
                        max-height: 24px;
                        margin-bottom: 7px;
                        line-height: 24px;
                        overflow: hidden;
                        display: flex;
                        .word-inner{
                            font-size: 17px;
                            color: #333;
                            font-weight: 700;
                            padding-right: 5px;
                            flex-shrink: 1;
                            display: block;

                        }
                    }
                    .item-detail{
                        font-size: 13px;
                        height:57px;
                        color: #666;
                        overflow: hidden;
                        .pingfen{
                            height:15px;
                            line-height: 13px;
                            .score{
                                font-weight: 700;
                                color: #faaf00;
                                font-size: 15px;
                            }
                            
                        }
                        .star,.show-info{
                            height: 15px;
                            margin-top: 6px;
                            line-height: 15px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                        }
                        .show-info{

                        }
                    }
                }
                .button-block{
                    width:47px;
                    font-size: 12px;
                    position: absolute;
                    right:4px;
                    top: 0;
                    bottom: 0;
                    height: 27px;
                    margin: auto;
                    .change-button{
                        width:47px;
                        height: 27px;
                        line-height: 28px;
                        text-align: center;
                        box-sizing: border-box;
                        color: #fff;
                        border-radius: 4px;
                        white-space: nowrap;
                        font-size: 12px;
                        cursor: pointer;
                    }
                    .red-bc{
                        background: red;
                    }
                    .blue-bc{
                        background: #3c9fe6;
                    }
                }
            }
        }
    }
</style>


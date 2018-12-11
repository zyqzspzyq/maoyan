<template>
    <div class="soon-item">
        <div class="main-block">
            <div class="img-wraper">
                <div class="img-inner">
                    <img :src="info.img | jpg" alt="">
                </div>
            </div>
            <div class="main-content">
                <div class="inner-content">
                    <div class="title">
                        <div class="title-inner">{{info.nm}}</div>
                    </div>
                    <div class="detail">
                        <div class="want"><span class="num">{{info.wish}}</span><span class="ren">人想看</span></div>
                    </div>
                    <div class="actor">主演：{{info.star}}</div>
                    <div class="time">{{info.rt}}上映</div>
                </div>
                <dir class="right">
                    <div class="bt" :class="color"><span>{{buy}}</span></div>
                </dir>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['info'],
    data() {
        return{
            buy: ''
        }
    },
    computed: {
        color: function(){
             if(this.info.globalReleased){
                this.buy = "购票"
                return 'red-bc';
            } else {
                this.buy = "预售"
                return 'blue-bc';
            }
        }
    }
}
</script>
<style lang="scss">
    .soon-item{
        padding-left:15px;
        background-color: #fff;
        .main-block{
            position: relative;
            width:100%;
            .img-wraper{
                width:64px;
                height:90px;
                position: relative;
                margin-top: 12px;
                float: left;
                .img-inner{
                    img{
                        height:90px;
                        display: block;
                        width:100%;
                        border: 0;
                    }
                }
            }
            .main-content{
                padding: 12px 14px 12px 0;
                margin-left: 74px;
                height: 114px;
                position: relative;
                width:277px;
                .inner-content{
                    padding-right: 5px;
                    margin-right: 48px;
                    overflow: hidden;
                    width: 215px;
                    .title{
                        heigth:24px;
                        margin-bottom: 7px;
                        line-height: 24px;
                        overflow: hidden;
                        display: flex;
                        .title-inner{
                            font-size: 17px;
                            color: #333;
                            font-weight: 700;
                            padding-right: 5px;
                            flex-shrink: 1;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            line-height: 24px;
                        }
                    }
                    .detail{
                        box-sizing: border-box;
                        line-height: 1;
                        overflow: hidden;
                        .want{
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                            .num{
                                color:#faaf00;
                                font-size: 15px;
                                font-weight: 600;

                            }
                            .ren{
                                font-size: 13px;
                                margin-left: -2px;
                                display: inline-block;
                                color: #666;
                            }
                        }
                    }
                    .actor{
                        font-size: 13px;
                        color: #666;
                        margin-top: 6px;
                        line-height: 15px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                    .time{
                         font-size: 13px;
                        color: #666;
                        margin-top: 6px;
                        line-height: 15px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                   
                }
                .right{
                    font-size: 12px;
                    position: absolute;
                    right:14px;
                    top: 0;
                    bottom: 0;
                    height:27px;
                    margin: auto;
                    .bt{
                        border: none;
                        color: white;
                        width:47px;
                        height:27px;
                        line-height: 28px;
                        text-align: center;
                        box-sizing: border-box;
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

<template>
    <section class="app-my">
        <div class="header">
            <img src="https://img.meituan.net/maoyanuser/da1d6e35eda3d36bd7c61a60ea7f942a10407.png" alt="">
            <div class="name">

            </div>
        </div>
        <div class="container">
            <div class="group">
                <div class="gp-tab">
                    <div class="order">
                        <div class="title">我的订单</div>
                        <div class="title-line"></div>
                        <div class="list">
                            <div class="list-item">
                                <a href="#">
                                    <p>电影</p>
                                </a>
                            </div>
                            <div class="list-item right">
                                <a href="#">
                                    <p>商城</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="gp-tab">
                    <div class="coupon-item">
                        <a href="#">
                            <span>在线观影</span>
                        </a>
                    </div>
                    <div class="coupon-item">
                        <a href="#">
                            <span>优惠券</span>
                        </a>
                    </div>
                    <div class="coupon-item">
                        <a href="#">
                            <span>折扣卡</span>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="chengqi"></div>
        <app-footer></app-footer>
    </section>
</template>
<script>
import AppFooter from '@components/layout/AppFooter'
export default {
    components: {
        AppFooter
    }
}
</script>
<style lang="scss">
    .app-my{
        background-color: #f3f3f3;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        .header{
            background-color: #f03d37;
            background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/bg.png);
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 100% 150px;
            height: 150px;
            overflow: hidden;
            text-align: center;
            img{
                display: inline-block;
                margin-top: 30px;
                width: 60px;
                height: 60px;
                border-radius: 60px;
                border: 3px solid #fff;
            }
            .name{
                margin-top: 7px;
                font-size: 16px;
                line-height: 22.5px;
                color: white;

            }
        }
        .container{
            -webkit-box-flex: 1;
            flex: 1;
            .group{
                margin-top: 10px;
                background: #fff;
                .gp-tab{
                    .order{
                        padding: 0 15px;
                        position: relative;
                        overflow: hidden;
                        text-align: center;
                        .title{
                            position: relative;
                            margin: 13px 0 0 ;
                            font-size: 15px;
                            line-height: 21px;
                            height: 21px;
                            color: #333;
                            z-index: 9;
                            display: inline-block;
                            width: 80px;
                            background-color: #fff;
                        }
                        .title-line{
                            position: absolute;
                            top: 23px;
                            left: 50%;
                            margin-left: -80px;
                            width:160px;
                            height: 1px;
                            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzhCNEEzQTE0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzhCNEEzQTA0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Mzg3REIwMzQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Mzg3REIwNDQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoL90/MAAAAZSURBVHjaYvr//z8DCLM8evToPwMQAAQYAGuLCaa37ZaAAAAAAElFTkSuQmCC) 0 bottom repeat-x;
                            background-size: 1px 1px;
                        }
                        .list{
                            overflow: hidden;
                            .list-item{
                                background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png);
                                width:50%;
                                float: left;
                                height:97px;
                                background-repeat: no-repeat;
                                background-position: top;
                                background-size: 42px auto;
                                margin-top: 18px;
                                a{
                                    display: block;
                                    height:90px;
                                    p{
                                        position: relative;
                                        top: 50px;
                                        text-align: center;
                                        font-size: 15px;
                                        line-height: 21px;
                                        height: 21px;
                                        margin: 0;
                                        color: #333;
                                    }
                                }
                            }
                            .right{
                                background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/store.png);
                            }
                        }
                    }
                    .coupon-item{
                        position: relative;
                        height: 44px;
                        line-height: 44px;
                        font-size: 15px;
                        margin-left: 15px;
                        padding-right: 15px;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==) 0 bottom repeat-x;
                        background-size: 1px 1px;
                        a{
                            display: block;
                            color: #333;
                            text-decoration: none;
                            cursor: pointer;
                            span{
                                text-align: left;
                                color: #333;
                                line-height: 44px;
                                font-size: 15px;
                            }
                        }
                    }
                }
            }
        }
        .chengqi{
            width:0;
            height: 116px;
        }
    }
</style>




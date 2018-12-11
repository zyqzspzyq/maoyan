<template>
    <section class="app-ciname">
        <div class="head">
            <div class="head-inner">
                <div class="city">
                    <span>北京</span><i class="fa fa-sort-desc" aria-hidden="true"></i>
                </div>
                <div class="search">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=" alt="">
                    <span>搜影院</span>
                </div>
            </div>
        </div>
        <div class="page-wrap">
            <div class="nav-wrap">
                <div class="tab">
                    <div class="item">全城<i class="fa fa-sort-desc" aria-hidden="true"></i></div>
                    <div class="item">品牌<i class="fa fa-sort-desc" aria-hidden="true"></i></div>
                    <div class="item">特色<i class="fa fa-sort-desc" aria-hidden="true"></i></div>                    
                </div>
            </div>
            <div class="list-wrap">
                <cinema-box 
                    v-for = "item in cinema_detail"
                    :key = "item.id"
                    :info = "item"
                ></cinema-box>
            </div>
        </div>
        <app-footer></app-footer>
    </section>
</template>
<script>
import AppFooter from '@components/layout/AppFooter'
import CinemaBox from '@components/common/app-home/cinema-box'
export default {
    components: {
        AppFooter,
        CinemaBox
    },
    data(){
        return {
            cinema_detail: []
        }
    },
    async created () {
        let result = await this.$http({
            url: '/my/ajax/cinemaList?day=2018-11-14&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1542199356414&cityId=1'
        })
        this.cinema_detail = result.data.cinemas
        console.log(this.cinema_detail)
    }
}
</script>
<style lang="scss">
    .app-ciname{
        display: block;
        .head{
            border-bottom: 1px solid #e6e6e6;
            height: 44px;
            display: block;
            .head-inner{
                width:auto;
                background-color: #f5f5f5;
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                height: 44px;
                -webkit-box-pack: justify;
                justify-content: space-between;
                .city{
                    width:auto;
                    padding-left: 15px;
                    font-size: 15px;
                    color: #666;
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    span{
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        max-width: 19.2vw;
                        font-size: 15px;
                        color: #666;
                    }
                    i{
                        color: #b0b0b0;
                        margin:5px;
                    }
                }
                .search{
                    -webkit-box-flex: 1;
                    flex-grow: 1;
                    display: flex;
                    -webkit-box-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    align-items: center;
                    height: 28px;
                    font-size: 13px;
                    color: #b2b2b2;
                    margin-left: 18px;
                    border: .5px solid #e6e6e6;
                    border-radius: 5px;
                    margin-left: 15px;
                    margin-right: 15px;
                    background-color: #fff;
                    img{
                        width:14px;
                        height:14px;
                        margin-left: 3px;
                        margin-right: 4px;
                    }
                    span{
                        width: auto;

                    }
                }
            }
        }
        .page-wrap{
            position: absolute;
            width:100%;
            height:100%;
            overflow: auto;
            .nav-wrap{
                height: 40px;
                z-index: 10;
                background-color: #fff;
                position: relative;
                .tab{
                    display: flex;
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==) 0 bottom repeat-x;
                    background-size: 1px 1px;
                    .item{
                        -webkit-box-flex: 1;
                        flex: 1;
                        text-align: center;
                        line-height: 40px;
                        position: relative;
                        white-space: nowrap;
                        overflow: hidden;
                        font-size: 13px;
                        text-overflow: ellipsis;
                        color: #777;
                        i{
                            color: #aaa;
                            
                        }
                    }
                }
            }
            .list-wrap{
                margin-top: 0;
                min-height: 627px;
                background-color: #fff;
            }
        }
    }
</style>



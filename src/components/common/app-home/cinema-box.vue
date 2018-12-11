<template>
    <section>
        <div class="items">
            <div class="item-inner">
                <div class="title"><span class="title-name">{{info.nm}}</span><span><span class="price">{{info.sellPrice}}</span><span class="q">元起</span></span></div>
                <div class="address">
                    <div class="address-inner">{{info.addr}}</div>
                    <div class="juli">{{info.distance}}</div>
                </div>
                <div class="label-block">
                    <div v-if='info.tag.endorse' class="endorse" >改签</div>
                    <div v-if='info.tag.snack' class="snack" >小吃</div>
                    <div v-if='info.tag.sell' class="snack" >折扣卡</div>
                    <div v-if='info.tag.hallType' v-for="itemed in info.tag.hallType" :key="itemed" class="endorse" >{{itemed}}</div>
                    
                   
                </div>
                <div v-if='info.promotion.cardPromotionTag' class="discount-block">
                    <div>
                        <div class="dis-img">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
                        </div>
                        <div class="dis-word">{{info.promotion.cardPromotionTag}}</div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['info'],
    data(){
        return{
            isTrue:false
            
        }
    },
    computed: {
        cc: function(){
            
        }
    }
}
</script>
<style lang="scss">
    .items{
        width:auto;
        padding:13px 15px 13px 0;
        margin-left: 15px;
        background-color: #fff;
        overflow: hidden;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==) 0 bottom repeat-x;
        background-size: 1px 1px;
        .item-inner{
            display: block;
            -webkit-box-align: center;
            align-items: center;
            line-height: 1.5;
            .title{
                height: 23px;
                line-height: 23px;
                font-size: 16px;
                color: #000;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                .title-name{
                    line-height: 23px;
                    font-size: 16px;
                    color: #000;
                    white-space: nowrap;
                }
                span{
                    padding-top: 9px;
                    padding-left: 3px;
                    line-height: 1.5;
                    .price{
                        font-size: 18px;
                        color:red;

                    }
                    .q{
                        margin-left: 3px;
                        font-size: 11px;
                        color: red;
                    }
                }
            }
            .address{
                width:auto;
                margin-top: 6px;
                font-size: 13px;
                color: #666;
                line-height: 1.5;
                display: flex;

                .address-inner{
                    
                    -webkit-box-flex: 1;
                    flex: 1;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    display: block;
                }
                .juli{
                    width:auto;
                    margin-left: 5px;
                }
            }
            .label-block{
                width:auto;
                height: 17px;
                line-height: 17px;
                margin-top: 4px;
                margin-bottom: 4px;
                overflow: hidden;
                font-size: 0;
                flex-shrink: 0;
                .endorse{
                    margin-left: 5px;
                    width:auto;
                    color: #589daf;
                    border: 1px solid #589daf;
                    position: relative;
                    display: inline-block;
                    padding: 0 3px;
                    height: 15px;
                    line-height: 12px;
                    border-radius: 2px;
                    font-size: 10px;
                }
                .snack{
                    margin-left: 5px;
                    width:auto;
                    color: #f90;
                    border: 1px solid #f90;
                    position: relative;
                    display: inline-block;
                    padding: 0 3px;
                    height: 15px;
                    line-height: 12px;
                    border-radius: 2px;
                    font-size: 10px;
                }
            }
            .discount-block{
                width:auto;
                color: #999;
                margin-bottom: 4px;
                line-height: 1.5;
                .dis-img{
                    width:15px;
                    height:14px;
                    position: relative;
                    top: 3px;
                    display: inline-block;
                    img{
                        display: block;
                        width:100%;
                        border: 0;

                    }
                    
                }
                .dis-word{
                        width:auto;
                        margin-left: 5px;
                        font-size: 11px;
                        display: inline-block;
                    }
            }
            
        }
    }
</style>


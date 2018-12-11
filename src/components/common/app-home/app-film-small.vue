<template>
    <div class="app-filem-small">
        <div class="small-img-box">
            <img :src="info.img | jpg" alt="">
            <span class="wish-bg"></span>
            <span class="wish"><span class="wish-number">{{info.wish}}</span>人想看</span>
            <div class="xiaoxinxin"><span></span></div>
        </div>
        <h5 class="name">{{info.nm}}</h5>
        <p id="data">{{info.comingTitle}}</p>
    </div>
</template>
<script>
export default {
    props: ['info'],
}
</script>
<style lang="scss">
    .app-filem-small{
        width:85px;
        display: inline-block;
        overflow: hidden;
        margin-right:10px;
            .small-img-box{
                width:85px;
                height:118px;
                position: relative;
                margin-bottom: 6px;
                img{
                    height:100%;
                    width:100%;
                    display:block;
                    white-space: nowrap;
                }
                .wish-bg{
                    display: inline-block;
                    width:100%;
                    height:35px;
                    position: absolute;
                    bottom: 0;
                    background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
                }
                .wish{
                    position:absolute;
                    left:4px;
                    bottom:4px;
                    color: #faaf00;
                    font-size: 11px;
                    font-weight: 600;
                    white-space: nowrap;
                }
            }
            .name{
                margin: 0 0 3px;
                font-size: 13px;
                color: #222;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                font-weight: bold;
            }
            #data{
                margin: 0;
                font-size: 12px;
                color: #999;

            }
    }
</style>


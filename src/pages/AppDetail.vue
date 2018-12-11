<template>
    <div class="body">
      <div class="movie-detail">
        <div class="movie-filter"></div>  
        <div class="poster-bg" :style = "bg_url"></div>
        <div class="detail-box">
          <div class="img-box">
            <img :src="item.img | jpg" alt="">
          </div>
          <div class="content">
            <div class="title">{{item.nm}}</div>
            <div class="en-name">{{item.enm}}</div>
            <div class="score">{{item.sc}} <span>({{item.snum | Snum}}万人评)</span></div>
            <div class="type"><span>{{item.cat}}</span></div>
            <div class="src type">{{item.fra}}/{{item.dur}}分钟</div>
            <div class="time type">{{item.pubDesc}}</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: ['id'],
  data () {
    return {
      item: {},

    }
  },
  computed: {
    bg_url(){
      return "background-image:url(" + this.item.albumImg +");"
    }
  },
  async created (){
    let result = await this.$http({
      url: '/my/ajax/detailmovie?movieId=' + this.id
      // methos: 'post',
      // url: 'http://m.maoyan.com/ajax/movie',
      // data: {
      //   movieId: '42964',
      //   day: '2018-11-13',
      //   offset: '0',
      //   limit: '20',
      //   districtId: '-1',
      //   lineId: '-1',
      //   hallType: '-1',
      //   brandId: '-1',
      //   serviceId: '-1',
      //   areaId: '-1',
      //   stationId: '-1',
      //   item: '',
      //   updataShowDay: true,
      //   reqId: '1542094619467',
      //   cityId: '1'

      
    })
    this.item = result.data.detailMovie
  }
  
}
</script>
<style lang="scss">
  .body{
    display: block;
    font-size: 14px;
    color: #777;
    .movie-detail{
      height:188px;
      position: relative;
      cursor: pointer;
      .movie-filter{
        position: absolute;
        z-index: -1;
        width:100%;
        height:100%;
        background-color: #333;
      }
      .poster-bg{
        width:100%;
        height:100%;
        z-index: -1;
        overflow: hidden;
        position: absolute;
        filter: blur(1.2rem);
        background-size: cover;
        background-repeat: no-repeat;
        opacity: .55;
      }
      .detail-box{
        height:188px;
        padding: 19px 30px 19px 15px;
        display: flex;
        .img-box{
          width:auto;
          img{
            width:110px;
            height: 150px;
            box-sizing: border-box;
            border: 0;
          }
        }
        .content{
          overflow-x: hidden;
          margin-left: 12.5px;
          line-height: 1;
          color: #fff;
          -webkit-box-flex: 1;
          flex: 1;
          .title{
            font-size: 20px;
            margin-top: 2px;
            font-weight: 700;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

          }
          .en-name{
            margin-top: 10px;
            font-size: 12px;
            color: #fff;
            opacity: .8;
          }
          .score{
            font-size: 18px;
            font-weight: 700;
            color: #fc0;
            margin-top: 11px;
            span{
              margin-top: 10px;
              font-size: 12px;
              color: #fff;
              opacity: .8;
            }}
            .type {
              margin-top: 10px;
              font-size: 12px;
              color: #fff;
              opacity: .8;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              span{
                vertical-align: top;
              }
            }
           
          
        }
      }
    }
  }
</style>


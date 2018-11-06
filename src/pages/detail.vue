<template>
    <div class="container">

        <div class="detail_header">
            <div class="bg_box">
                <div class="bg">
                </div>
            </div>
            <div class="detail_header_name">
                <img src="" id="detail_img">
                <div class="nameAndCity">
                    <span class="sing_name"> 陈启辰20周年掩藏会-慢慢长夜cherr20</span>
                    <span class="city"> 深圳</span>
                    <p class="price">299-999元</p>
                </div>

            </div>

        </div>
        <div class="project-desc">
            <p>2019.03.23</p>
            <span class="symbol">></span>
        </div>
        <div class="project-desc">
            <p>华锐深圳体育中心“纯碱”体育馆</p>
            <img src="../assets/map.png" class="dm-venue-amap " />
        </div>

        <div class="detail_footer">
            <div class="detail_footer_box">
                <div class="footer_li">
                    <i>1</i>
                    <p>大麦首页</p>
                </div>
                <div class="footer_li">
                    <i>1</i>
                    <p>关注</p>
                </div>
            </div>
            <button>立即预定</button>

        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.container {
  height: 100%;
  .detail_header {
    height: 5.08rem;
    .bg_box {
      position: relative;
      height: 3.78667rem;
      overflow: hidden;
      background-repeat: no-repeat;
      background-size: 100% auto;
      .bg {
        background: url(" https://pimg.dmcdn.cn/perform/project/1673/167399_n.jpg?_t=1540969449412?1541347702624&x-oss-process=image/resize,p_50")
          no-repeat center center;
        background-repeat: no-repeat;
        background-size: 200% auto;
        background-position: 0 50%;
        -webkit-transform: scale(1.1) !important;
        transform: scale(1.1) !important;
        height: 3.78667rem;
        filter: saturate(1) brightness(1) blur(0.33333rem) contrast(0.8);
        background-color: rgb(231, 231, 231);
      }
    }
    .detail_header_name {
      position: absolute;
      top: 0.8rem;
      right: 0.22667rem;
      left: 0.32rem;
      width: 9.453333rem;
      height: 3.786667rem;
      display: flex;
      justify-content: space-between;
      align-content: center;
      #detail_img {
        height: 3.786667rem;
      }
      .nameAndCity {
        display: flex;
        flex-direction: column;
        color: white;
        margin-left: 0.533333rem;
        .city {
          display: block;
          margin-bottom: 1.066667rem;
        }
        .sing_name {
          width: 6.12rem;
        }
        .price {
          position: absolute;
          top: 3.033333rem;
          font-size: 0.53333rem;
          font-weight: 700;
          color: #ff1268;
          height: 0.693333rem;
        }
      }
    }
  }
  .project-desc {
    height: 1.146667rem;
    line-height: 1.146667rem;
    border-top: 0.013333rem solid #f3f3f3;
    border-bottom: 0.013333rem solid #f3f3f3;
    font-size: 0.34667rem;
    color: #666;
    padding-left: 0.266667rem;
    position: relative;
    p {
      display: inline-block;
    }
    .symbol {
      position: absolute;
      left: 9.2rem;
      color: #666;
      height: 0.24rem;
    }
    .dm-venue-amap {
      width: 0.666667rem;
      height: 0.666667rem;
      position: absolute;
      left: 9rem;
      top: 0.233333rem;
    }
  }
  .detail_footer {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1.28rem;
    display: flex;

    .detail_footer_box {
      display: flex;
      justify-content: space-around;
      width: 2.666667rem;
      .footer_li {
        width: 1.333333rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        font-size: 0.26667rem;
        color: #666;
        p {
          line-height: 0.933333rem;
          text-align: center;
        }
        i {
          text-align: center;
        }
      }
    }
    button {
      flex: 1;
      background: #ff1f78;
      color: white;
      font-size: 0.4rem;
    }
  }
}
</style>


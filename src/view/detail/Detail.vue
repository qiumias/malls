<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
      <scroll class="detail-content" ref="scroll" 
      @scroll="contentScroll" :probe-type="3">
        <detail-swiper :top-images="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info ref="params" :detail-info="detailInfo" />
        <detail-param-info :param-info="paramInfo"/>
        <detail-comment-info ref="comment" :comment-info="commentInfo"/>
        <goods-list ref="recommend" :goods="recommends"/>
      </scroll>
      <detail-bottom-bar/>
      <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from '@/components/common/scroll/Scroll'
import GoodsList from '@/components/content/goods/GoodsList'
import BackTop from '@/components/content/backTop/BackTop'


import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "@/network/detail"
import {itemListenerMixin} from "common/mixin"

export default {
    name:'Detail',
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar,BackTop
    },
    mixins:[itemListenerMixin],
    data(){
        return{
            iid:'',
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[],
            themeTopY:[],
            currentIndex:0,
            isShowBackTop:false,
            toastMsg:'',
            isToastShow:false
        }
    },
    methods:{
      titleClick(index){
        this.themeTopY = []
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.params.$el.offsetTop)
        this.themeTopY.push(this.$refs.comment.$el.offsetTop)
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
        this.$refs.scroll.scrollTo(0,-this.themeTopY[index],100)
      },
      contentScroll(position){
          this.themeTopY = []
          this.themeTopY.push(0);
          this.themeTopY.push(this.$refs.params.$el.offsetTop)
          this.themeTopY.push(this.$refs.comment.$el.offsetTop)
          this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
          const positionY=-position.y
          let length=this.themeTopY.length
          for(let i=0;i<length;i++){
              if(this.currentIndex!=i&&((i<length-1&&positionY>=
              this.themeTopY[i]&&positionY<this.themeTopY[i+1])
              ||(i===length-1&&positionY>=this.themeTopY[i]))){
                  this.currentIndex=i
                  this.$refs.nav.currentIndex=this.currentIndex
              }
          }
          this.isShowBackTop=(-position.y)>1000
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      
    },
    destroyed(){
        this.$bus.$off('itemImgLoad',this.itemImgListener)
    },
    created(){
        // 保存传入的iid
        this.iid=this.$route.params.iid

        // 根据iid请求详情数据
        getDetail(this.iid).then(res=>{
            // 获取顶部的图片轮播数据
            console.log(res);
            const data=res.result
            this.topImages=data.itemInfo.topImages

            // 获取商品信息
            this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)

            // 创建店铺信息的对象
            this.shop=new Shop(data.shopInfo)

            // 保存商品的详情数据
            this.detailInfo=data.detailInfo

            // 获取参数信息
            this.paramInfo = new GoodsParam(data.itemParams.rule,data.itemParams.info)

            // 取出评论的信息
            if(data.rate.cRate!==0){
                this.commentInfo=data.rate.list[0]
            }
        })

        // 请求推荐数据
        getRecommend().then(res=>{
            this.recommends=res.data.list
        })

    }
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}
.detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.detail-content{
    height: calc(100% - 44px);
    overflow: hidden;
}
</style>>
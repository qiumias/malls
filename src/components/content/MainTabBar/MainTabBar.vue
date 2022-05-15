<template>
  <tab-bar>
      <tab-bar-item path="/home">
        <template #item-icon><img src="@/assets/img/common/home.png"></template>
        <template #item-icons><img src="@/assets/img/common/homes.png"></template>
        <template #item-text>首页</template>
        <!-- <img slot="item-icon" src="../../assets/img/home.png" alt=""> -->
        <!-- <img slot="item-icons" src="../../assets/img/homes.png" alt=""> -->
        <!-- <div slot="item-text" >首页</div> -->
      </tab-bar-item>
      <tab-bar-item path="/default">
        <template #item-icon><img src="@/assets/img/common/default.png"></template>
        <template #item-icons><img src="@/assets/img/common/defaults.png"></template>
        <template #item-text>消息</template>
        <!-- <img slot="item-icon" src="../../assets/img/defaults.png" alt="">
        <img slot="item-icons" src="../../assets/img/default.png" alt="">
        <div slot="item-text" >消息</div> -->
      </tab-bar-item>
      <tab-bar-item path="/market">
        <template #item-icon><img src="@/assets/img/common/shopping.png"></template>
        <template #item-icons><img src="@/assets/img/common/shoppings.png"></template>
        <template #item-text>购物车</template>
        <!-- <img slot="item-icon" src="../../assets/img/market.png" alt="">
        <img slot="item-icons" src="../../assets/img/markets.png" alt="">
        <div slot="item-text" >购物车</div> -->
      </tab-bar-item>
      <tab-bar-item path="/my">
        <template #item-icon><img src="@/assets/img/common/my.png"></template>
        <template #item-icons><img src="@/assets/img/common/mys.png"></template>
        <template #item-text>我的</template>
        <!-- <img slot="item-icon" src="../../assets/img/my.png" alt="">
        <img slot="item-icons" src="../../assets/img/mys.png" alt="">
        <div slot="item-text" >我的</div> -->
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem 
  }
}
</script>

<style>

</style>
<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <slot name="item-icon"></slot> -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <!-- <slot name="item-icons"></slot> -->
    <div v-else><slot name="item-icons"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
        // isActive:true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
}
</script>

<style>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  img{
    width: 26px;
    margin: 1px auto;
    vertical-align: middle;
  }
  .active{
    color: red;
  }
</style>
<template>
  <div class="recommend">
      <div v-for="(item,key) in recommends" :key="key" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommend{
    display: flex;
    border-bottom: 10px solid #eee;
}
.recommend-item{
    flex: 1;
    text-align: center;
    font-size:12px ;
    padding: 10px 0 15px 0;
}
.recommend img{
    width: 65px;
    height: 65px;
    margin-bottom: 5px;
}
</style>
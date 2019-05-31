<template>
  <el-carousel height="42px" direction="vertical" interval="5000" indicator-position="none">
    <el-carousel-item v-for="item in items" :key="item">
      <div class="bulletin">
        <span class="left">公告</span>
        <span class="line"></span>
        <span class="right" v-bind:class="{hasOpenUrl: !!item.url}"
          @click="openUrl(item.url)">{{item.title}}</span>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data () {
    return {
      items: [{
        title: '保持改革战略定力，习近平这些话掷地有声！',
        url: 'https://www.baidu.com'
      }, {
        title: '根据《全球城市综合排名》，北京、上海、广州、深圳分列第9、19、71和79位，紧随“北上广深”的是南京，其排在第86位。此外，进入前百位的依次还有天津（88）、成都（89）、杭州（91）和苏州（95）。'
      }, {
        title: '美中贸易全国委员会会长警告，用关税手段解决中美经贸问题十分危险！'
      }, {
        title: '党的十九大代表、巴珠村党总支书记和勋介绍说，全村82位感恩连成员中就有38人是建档立卡户。',
        url: 'https://www.baidu.com'
      }]
    }
  },
  components: {
  },
  created(){
  },
  mounted(){
  },
  methods: {
    openUrl(url){
      if(url){
        window.open(url);
      }
    }
  }
}
</script>
<style lang="scss">
@import '~asset/common';
@import '~asset/app';
</style>

<template>
  <el-carousel height="42px" direction="vertical" interval="5000" indicator-position="none" 
    v-if="items.length>0">
    <el-carousel-item v-for="item in items" :key="item">
      <div class="bulletin">
        <span class="left">{{i18n.Bulletin}}</span>
        <span class="line"></span>
        <span class="right" v-bind:class="{hasOpenUrl: !!item.url}"
          @click="openUrl(item)">{{item.title}}</span>
      </div>
    </el-carousel-item>
  </el-carousel>
  <div class="error-info" v-else>
    <img v-if="errMsg" src="static/styleImages/tea.svg" />
    <span @click="getDatas()">{{errMsg}}</span>
  </div>  
</template>
<script>
import apiSer from 'ser/api'

export default {
  data () {
    return {
      i18n: window.i18n,
      items: [],
      errMsg: ''
    }
  },
  components: {
  },
  created(){
    this.getDatas();
    app.linkplugin.listenRefreshWidgetData(() => {
      this.getDatas();
    });    
  },
  mounted(){
  },
  methods: {
    getDatas(){
      apiSer.getBulletins((datas) => {
        this.items = datas;
        this.errMsg = '';
      }, (errMsg) => {
        this.errMsg = errMsg;
      });
    },
    openUrl(item){
      if(item.url){
        app.linkplugin.openWindow(item.url, item.title)
      }
    }
  }
}
</script>
<style lang="scss">
@import '~asset/common';
@import '~asset/app';
</style>

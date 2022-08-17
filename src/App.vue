<template>
  <div id="app">
    <tabbar>
      <tabbar-item path="/home">
        <img src="./assets/img/tabbar/home.png" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/home_active.png" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/classify">
        <img src="./assets/img/tabbar/classify.png" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/classify_active.png" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img src="./assets/img/tabbar/cart.png" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/cart_active.png" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <img src="./assets/img/tabbar/my.png" alt="" slot="item-icon">
        <img src="./assets/img/tabbar/my_active.png" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from "./components/tabbar/tabbar";
import tabbarItem from "@/components/tabbar/tabbarItem";
 export  default {
   name:'App',
   components:{
     tabbar,
     tabbarItem
   }
 }
</script>

<style lang="scss">
@import "assets/css/base.css";
</style>

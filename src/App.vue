<template>
  <div class="container">
    <nav>
      <div class="left">
        <img class="logo" :src="NuxtLogo" alt="logo" />
        <router-link to="/" class="title">Dr. Vue.js</router-link>
      </div>
      <div class="menu">
        <router-link to="/">Home</router-link> |
        <router-link to="/posts">Posts</router-link> |
        <router-link to="/repos">Repos</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <div class="right">
        <font-awesome-icon :icon="['fab', 'github']" />
        <span class="title">1.5K</span>
      </div>
    </nav>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import NuxtLogo from "@/assets/Nuxt_Logo.svg";
</script>

<style scoped lang="scss">
@import "assets/colors";

.container {
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  & nav {
    width: 100%;
    height: 40px;
    border-radius: 6px;
    margin: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    & .left {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .logo {
        height: 50px;
        object-fit: contain;
      }

      .title {
        font-size: 20px;
        font-weight: bolder;
        padding-left: 15px;
      }
    }

    & .menu {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 15px;
    }

    & .right {
      width: 200px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;
      gap: 10px;
    }
  }
}
</style>

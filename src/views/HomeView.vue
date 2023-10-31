<template>
  <div class="home">
    <div class="welcome">
      <span class="title">Welcome, Developer</span>
      <div class="message">
        <span>
          A place for developers to have a great time while learning about Front
          End development and other things.
        </span>
        <span> -Yusuf Emin Demirci </span>
      </div>
    </div>
    <div class="links">
      <a class="link" href="https://github.com/YusufEminDemirci">
        <font-awesome-icon :icon="['fab', 'github']" />
        <span class="name">Github</span>
      </a>
      |
      <a class="link" href="https://medium.com/@yusufemindemirci">
        <font-awesome-icon :icon="['fab', 'medium']" />
        <span class="name">Medium</span>
      </a>
      |
      <a
        class="link"
        href="https://www.linkedin.com/in/yusuf-emin-demirci-993997239/"
      >
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        <span class="name">Linkedin</span>
      </a>
    </div>
    <span class="tr"> Made with ♡ in Türkiye </span>
  </div>
</template>

<script setup lang="ts">
import Wave from "@/assets/Wave.svg";
</script>

<style scoped lang="scss">
@import "@/assets/colors";

.home {
  width: 100%;
  height: 100%;
  position: relative;

  & .tr {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 15px;
  }

  & .welcome {
    height: calc(100% - 100px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .title {
      font-size: 50px;
      color: $tertiary-color;
      margin-bottom: 50px;
      font-weight: bolder;
    }

    & .message {
      display: flex;
      flex-direction: column;
      align-items: end;
      font-size: 17px;
      width: 50%;
      gap: 15px;
    }
  }

  & .links {
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;

    & .link {
      cursor: pointer;
      text-decoration: none;
      font-size: 20px;

      & .name {
        padding-left: 15px;
      }

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background: $tertiary-color;
        transition: transform 0.2s ease-in-out;
        transform: scale(0);
      }

      &:hover::after {
        transform: scale(1);
      }
    }
  }
}
</style>

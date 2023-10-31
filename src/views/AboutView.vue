<template>
  <div class="about">
    <img class="pp" src="@/assets/pp.jpeg" alt="pp" />
    <div class="title">
      <span class="name">Yusuf Emin Demirci</span>
      <span class="nick">Dr. Vue.js</span>
    </div>
    <div class="about-me">
      <span>I am 24 years old, I live in Ankara / Turkey.</span>
      <span>
        I have been working as a Front-End Developer at
        <a href="www.isimizbu.com.tr/">İŞİMİZBU A.Ş.</a> since september 2021.
      </span>
    </div>
    <div class="content">
      <div class="skills-container">
        <span class="title">Skills</span>
        <div class="skills">
          <a class="skill" href="vuejs.org/">
            <img class="logo" :src="Vue" alt="vue.js" />
            <span>Vue.Js</span>
          </a>
          <a class="skill" href="www.typescriptlang.org/">
            <img class="logo" :src="Typescript" alt="typescript" />
            <span>Typescript</span>
          </a>
          <a class="skill" href="www.electronjs.org/">
            <img class="logo" :src="Electron" alt="electron.js" />
            <span>Electron.js</span>
          </a>
          <a class="skill" href="www.javascript.com/">
            <img class="logo" :src="Javascript" alt="javascript" />
            <span>Javascript</span>
          </a>
          <a class="skill" href="jestjs.io/">
            <img class="logo" :src="Jest" alt="jest" />
            <span>Jest</span>
          </a>
        </div>
      </div>
      <div class="programs-container">
        <span class="title">Programs</span>
        <div class="programs">
          <a class="program" href="www.jetbrains.com/webstorm/">
            <img class="logo" :src="Jetbrains" alt="webstorm" />
            <span>Webstorm</span>
          </a>
          <a class="program" href="www.warp.dev/">
            <img class="logo" :src="Warp" alt="warp" />
            <span>Warp</span>
          </a>
          <a class="program" href="www.postman.com/">
            <img class="logo" :src="Postman" alt="postman" />
            <span>Postman</span>
          </a>
          <a class="program" href="www.figma.com/?fuid=">
            <img class="logo" :src="Figma" alt="figma" />
            <span>Figma</span>
          </a>
          <a class="program" href="obsidian.md/">
            <img class="logo" :src="Obsidian" alt="obsidian" />
            <span>Obsidian</span>
          </a>
          <a class="program" href="slack.com/">
            <img class="logo" :src="Slack" alt="slack" />
            <span>Slack</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Vue from "@/assets/logos/Vue.js.svg";
import Typescript from "@/assets/logos/TypeScript.svg";
import Javascript from "@/assets/logos/Javascript.svg";
import Electron from "@/assets/logos/Electron.svg";
import Jest from "@/assets/logos/Jest.svg";
import Jetbrains from "@/assets/logos/JetBrains.svg";
import Warp from "@/assets/logos/Warp.webp";
import Postman from "@/assets/logos/Postman.svg";
import Figma from "@/assets/logos/Figma.svg";
import Obsidian from "@/assets/logos/Obsidian.svg";
import Slack from "@/assets/logos/Slack.svg";
</script>

<style scoped lang="scss">
@import "@/assets/colors";

.about {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;

  & .pp {
    width: 250px;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  & .title {
    display: flex;
    flex-direction: column;
    align-items: center;

    & .name {
      font-weight: bolder;
      font-size: 35px;
    }

    & .nick {
      font-size: 25px;
    }
  }

  & .about-me {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  & .content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & .skills-container,
    & .programs-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;

      & .title {
        font-size: 25px;
        font-weight: bold;

        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: $tertiary-color;
        }
      }

      & .skills,
      & .programs {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
        gap: 30px;

        & .skill,
        & .program {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 20px;
          gap: 15px;

          & .logo {
            width: 30px;
          }
        }
      }
    }
  }
}
</style>

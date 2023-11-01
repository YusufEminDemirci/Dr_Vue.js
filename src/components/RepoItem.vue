<template>
  <div class="gh-item">
    <div class="body">
      <a class="title" :href="repo.html_url" target="_blank">{{ repo.name }}</a>
      <div class="description">
        {{ repo.description || "No description." }}
      </div>
    </div>
    <div class="footer">
      <div class="fork">
        <i class="fa-solid fa-code-fork" />
        <font-awesome-icon :icon="['fas', 'code-fork']" />
        <span>{{ repo.forks_count }}</span>
      </div>
      <div class="star">
        <font-awesome-icon :icon="['fas', 'star']" />
        <span>{{ repo.stargazers_count }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Repo } from "@/interface/repo";

defineProps({
  repo: {
    type: Object as () => Repo,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/colors";

.gh-item {
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px solid $border-color;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;

  &:hover {
    border-color: $tertiary-color;
    cursor: pointer;
  }

  & .body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 10px;
    padding: 15px;
    background-color: $secondary-color;

    & .title {
      color: $tertiary-color;
      text-decoration-line: none;
      font-size: 20px;
    }

    & .description {
      font-size: 15px;
    }
  }

  & .footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 15px;
    background-color: $secondary-color-light;
    padding: 15px;

    & .fork,
    & .star {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }
  }
}
</style>

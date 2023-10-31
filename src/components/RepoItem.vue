<template>
  <div class="gh-item">
    <div class="left">
      <a class="title" :href="repo.html_url" target="_blank">{{ repo.name }}</a>
      <div class="date">
        <font-awesome-icon :icon="['far', 'calendar-days']" />
        {{ new Date(repo.pushed_at).toLocaleString() }}
      </div>
      <div class="description">
        {{ repo.description || "No description..." }}
      </div>
    </div>
    <div class="right">
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
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  gap: 10px;

  & .left {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 10px;

    & .title {
      color: $tertiary-color;
      text-decoration-line: none;
      font-size: 20px;
    }

    & .date {
      color: #54657e;
      font-size: 14px;
      font-style: italic;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;

      i {
        font-size: 18px;
        color: #54657e !important;
      }
    }

    & .description {
      font-size: 15px;
    }
  }

  & .right {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 15px;

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

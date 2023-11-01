<template>
  <div class="post-item">
    <div class="body">
      <a class="title" :href="post.url" target="_blank">{{ post.title }}</a>
      <div class="date">
        <font-awesome-icon :icon="['far', 'calendar-days']" />
        {{ new Date(post.date).toLocaleString() }}
      </div>
    </div>
    <div class="footer">
      <div
        class="category"
        v-for="category in post.categories"
        :key="category.id"
      >
        #{{ category.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Post } from "@/interface/post";

defineProps({
  post: {
    type: Object as () => Post,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/colors";

.post-item {
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 1px solid $border-color;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  background-color: $secondary-color;

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
  }

  & .footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 15px;
    background-color: $secondary-color-light;
    padding: 15px;

    & .category {
      border-radius: 5px;
      padding: 2.5px 5px;
      background-color: #54657e;
      font-size: 13px;
      user-select: none;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      color: white;
      white-space: nowrap;

      &:hover {
        background-color: $tertiary-color;
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
}
</style>

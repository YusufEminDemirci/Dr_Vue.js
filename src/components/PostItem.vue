<template>
  <div class="post-item">
    <a class="title" :href="post.url" target="_blank">{{ post.title }}</a>
    <div class="date">
      <font-awesome-icon :icon="['far', 'calendar-days']" />
      {{ new Date(post.date).toLocaleString() }}
    </div>
    <div class="categories">
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
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: start;
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

  & .categories {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    gap: 15px;

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

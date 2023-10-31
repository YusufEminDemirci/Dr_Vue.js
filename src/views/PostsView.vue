<template>
  <MediumProvider v-slot="{ posts }">
    <div v-if="posts" class="posts">
      <span v-if="posts.length < 1"> No posts found... </span>
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </MediumProvider>
</template>

<script setup lang="ts">
import MediumProvider from "@/providers/MediumProvider.vue";
import PostItem from "@/components/PostItem.vue";
</script>

<style scoped lang="scss">
.posts {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 60px;
}
</style>

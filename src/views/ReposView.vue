<template>
  <GithubProvider v-slot="{ repos }">
    <div class="repos">
      <span v-if="repos.length < 1"> No repos found... </span>
      <RepoItem v-for="repo in repos" :key="repo.id" :repo="repo" />
    </div>
  </GithubProvider>
</template>

<script setup lang="ts">
import GithubProvider from "@/providers/GithubProvider.vue";
import RepoItem from "@/components/RepoItem.vue";
</script>

<style scoped lang="scss">
.repos {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 60px;
}
</style>

<template>
  <div class="repos">
    <GithubProvider v-slot="{ repos }">
      <span v-if="repos.length < 1"> No repos found... </span>
      <transition-group name="fade" mode="out-in">
        <RepoItem v-for="repo in repos" :key="repo.id" :repo="repo" />
      </transition-group>
    </GithubProvider>
  </div>
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

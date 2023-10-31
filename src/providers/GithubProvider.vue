<template>
  <slot :repos="repos" />
</template>

<script setup lang="ts">
import { Repo } from "@/interface/repo";
import { onBeforeMount, Ref, ref } from "vue";
import config from "@/config/config.json";

const per_page: Ref<number> = ref(5);
const repos: Ref<Repo[]> = ref([]);

const getRepositories = async (): Promise<Repo[]> => {
  let url = `https://api.github.com/users/${config.github_name}/repos?per_page=${per_page.value}`;
  const response = await fetch(url);
  let json: Repo[] = await response.json();

  // Only un-forked
  let filtered = json.filter((repo) => !repo.fork);

  // sort by stargazers desc
  filtered = filtered.sort(sortRepos);

  return Promise.resolve(filtered);
};

onBeforeMount(async () => {
  repos.value = await getRepositories();
});

function sortRepos(a: Repo, b: Repo) {
  if (a.stargazers_count > b.stargazers_count) return -1;
  if (a.stargazers_count < b.stargazers_count) return 1;
  return 0;
}
</script>

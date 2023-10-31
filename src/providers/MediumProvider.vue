<template>
  <Suspense timeout="0">
    <slot :posts="posts" :tags="tags" />
    <template #fallback>
      <div>Loading ...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { Post } from "@/interface/post";
import { onBeforeMount, ref, Ref } from "vue";
import config from "@/config/config.json";

const posts: Ref<Post[]> = ref([]);
let tags: Ref<string[]> = ref([]);
const fetchBlogArticles = async () => {
  const RSS_URL = `https://mediumrss.ksckaan1.workers.dev/?username=${config.medium_name}`;
  await fetch(RSS_URL)
    .then((response: Response) => response.text())
    .then((text: string) => {
      let dp = new DOMParser();
      let doc: Document = dp.parseFromString(text, "text/xml");

      let items = doc.querySelectorAll("item");

      items.forEach((item, index) => {
        const post: Post = {
          categories: [],
          date: clear(`${item.querySelector("pubDate")?.innerHTML}`),
          id: index,
          title: clear(`${item.querySelector("title")?.innerHTML}`),
          url: `${item.querySelector("link")?.innerHTML}`,
        };

        item.querySelectorAll("category").forEach((category, index) => {
          const cleared_tag_name: string = clear(category.innerHTML);
          const tag = {
            id: index,
            title: cleared_tag_name,
          };
          post.categories.push(tag);
          tags.value.push(cleared_tag_name);
        });

        tags.value = [...new Set(tags.value)];

        posts.value.push(post);
      });
    });
};

onBeforeMount(async () => {
  await fetchBlogArticles();
});

function clear(input: string): string {
  const regex = /<!\[CDATA\[(.*?)]]>/s;
  return input?.replace(regex, "$1") || "";
}
</script>

<style scoped lang="scss">
//
</style>

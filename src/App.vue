<template>
  <Header />
  <div v-loading="!test">
    <router-view
      v-if="route.name !== 'FIRSTLOAD'"
      v-slot="{ Component }"
      class="overflow-y"
    >
      <component :is="Component" />
    </router-view>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { computed, ref, unref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Text } from "@utils";

import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";

const route = useRoute();
const router = useRouter();

const test = ref(true);

const filterValue = ref("");
const data = ref(["hamza", "azedin"]);
const filterSelect = (data) => {
  filterValue.value = "";
  router.push(data.value);
};
const filterSearch = (queryString: string, cb) => {
  const results = queryString
    ? unref(data).filter((elm) => Text.Include(elm, queryString))
    : unref(data);
  cb(results);
};
</script>

<style scoped lang="scss">
.list-item {
  @apply mx-5;
  @apply mt-1;
  @apply text-sm;
}
</style>

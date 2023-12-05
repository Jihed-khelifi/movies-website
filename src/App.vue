<template>
  <Header />
  <main class="max-w-[1300px] px-4 sm:px-4 md:px-4  mx-auto">
    <router-view v-if="route.name !== 'FIRSTLOAD'" v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";

const route = useRoute();

</script>

<style lang="scss">

.el-pagination .el-pager li, .el-pagination button {
  border-radius: 100px;
}

</style>

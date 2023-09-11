<template>
  <header class="header" data-header>
    <div class="container">

      <div class="overlay" data-overlay></div>
      <!-- 
      <a href="./index.html" class="logo">
        <img src="./assets/images/logo.svg" alt="Filmlane logo">
      </a> -->

      <div class="header-actions">

        <button class="search-btn">
          <!-- <ion-icon name="search-outline"></ion-icon> -->
        </button>

        <!-- <div class="lang-wrapper">
          <label for="language">
            <ion-icon name="globe-outline"></ion-icon>
          </label>

          <select name="language" id="language">
            <option value="en">EN</option>
            <option value="au">AU</option>
            <option value="ar">AR</option>
            <option value="tu">TU</option>
          </select>
        </div> -->
        <el-link href="/login">
          <button class="btn btn-primary">Sign in</button>
        </el-link>
      </div>

      <button class="menu-open-btn" data-menu-open-btn>
        <!-- <ion-icon name="reorder-two"></ion-icon> -->
      </button>

      <nav class="navbar" data-navbar>

        <div class="navbar-top">

          <a href="./index.html" class="logo">
            <img src="./assets/images/logo.svg" alt="Filmlane logo">
          </a>

          <button class="menu-close-btn" data-menu-close-btn>
            <!-- <ion-icon name="close-outline"></ion-icon> -->
          </button>

        </div>


        <ul class="navbar-list">

          <li>
            <el-link href="/" class="no-underline">
              <a class="navbar-link">Home</a>
            </el-link>
          </li>

          <li>
            <el-link>
              <a href="#" class="navbar-link">Movies</a>
            </el-link>
          </li>


          <li>
            <el-link>
              <a href="#" class="navbar-link">Tv Series</a>
            </el-link>
          </li>

          <li>
            <el-link>
              <a href="#" class="navbar-link">People</a>
            </el-link>
          </li>

        </ul>
      </nav>
    </div>
  </header>
  <div v-loading="!test">
    <router-view v-if="route.name !== 'FIRSTLOAD'" v-slot="{ Component }" class="overflow-y">
      <component :is="Component" />
    </router-view>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <p class="copyright">
        &copy; 2023 <a href="#">Ret3i</a>. All Rights Reserved
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, unref } from 'vue';
import ApplicationLogo from '@components/ApplicationLogo.vue';
import { useRouter, useRoute } from 'vue-router';
import { Text } from '@utils';
import { Search } from '@element-plus/icons-vue';

const route = useRoute();
const router = useRouter();

const test = ref(true);



const filterValue = ref('');
const data = ref(["hamza", "azedin"]);
const filterSelect = (data) => {
  filterValue.value = '';
  router.push(data.value);
};
const filterSearch = (queryString: string, cb) => {
  const results = queryString
    ? unref(data).filter((elm) => Text.Include(elm, queryString))
    : unref(data);
  cb(results);
};
</script>

<style scoped>
.list-item {
  @apply mx-5;
  @apply mt-1;
  @apply text-sm;
}
</style>

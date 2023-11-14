<template>
  <header class="header">
    <!-- Desktop version -->
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'Home page' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Movies page' }">Movies</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'TV shows page' }">TV Shows</router-link>
        </li> 
        <li>
          <router-link :to="{ name: 'People page' }">People</router-link>
        </li>
      </ul>
      <el-dropdown>
        <span>Genre</span>
        <template #dropdown>
          <el-dropdown-menu>
            <div class="grid grid-rows-5 grid-flow-col gap-3">
              <div v-for="genre in genres" :key="genre.id">
                <el-dropdown-item>{{ genre.name }}</el-dropdown-item>
              </div>
            </div>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </nav>
    <!-- Mobile version -->
    <!-- <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'movies' }">Movies</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'tv' }">TV Shows</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'people' }">People</router-link>
        </li>
        <li>
          <el-dropdown>
            <span>Genre</span>
            <template #dropdown>
              <el-dropdown-menu>
                <div class="grid grid-rows-5 grid-flow-col gap-3">
                  <div v-for="genre in genres" :key="genre.id">
                    <el-dropdown-item>{{ genre.name }}</el-dropdown-item>
                  </div>
                </div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
      </ul>
    </nav> -->
  </header>
</template>
<script setup lang="ts">
import ApplicationLogo from "@components/ApplicationLogo.vue";
import { ref } from "vue";

const genres = ref([
  { name: 'Action', id: 1 },
  { name: 'Adventure', id: 2 },
  { name: 'Animation', id: 3 },
  { name: 'Comedy', id: 4 },
  { name: 'Crime', id: 5 },
  { name: 'Documentary', id: 6 },
  { name: 'Drama', id: 7 },
  { name: 'Family', id: 8 },
  { name: 'Fantasy', id: 9 },
  { name: 'History', id: 10 },
  { name: 'Horror', id: 11 },
  { name: 'Music', id: 12 },
  { name: 'Mystery', id: 13 },
  { name: 'Romance', id: 14 },
  { name: 'Science Fiction', id: 15 },
  { name: 'TV Movie', id: 16 },
  { name: 'Thriller', id: 17 },
  { name: 'War', id: 18 },
  { name: 'Western', id: 19 },
])

</script>
<template>
  <div class="container hero">
    <LandingScreen />
  </div>

  <div class="container upcoming">
    <div class="flex-wrapper">
      <div class="title-wrapper">
        <p class="section-subtitle">Online Streaming</p>

        <h2 class="h2 section-title">Upcoming Movies</h2>
      </div>

      <ul class="filter-list">
        <li>
          <button class="filter-btn">Movies</button>
        </li>

        <li>
          <button class="filter-btn">TV Shows</button>
        </li>

        <li>
          <button class="filter-btn">Anime</button>
        </li>
      </ul>
    </div>
    <RecommandedMovies />

  </div>
</template>

<script setup lang="ts">
import { ref, unref, onMounted } from "vue";

import LandingScreen from "../components/home/LandingScreen.vue";

import RecommandedMovies from "@components/Home/RecommandedMovies.vue";

const movies = ref<any>([]);

const scrollFunction = (e: any) => {
  e.preventDefault();
  e.target.scrollLeft += e.deltaY;
};

const data = ref<number[]>([]);
for (let i = 0; i < 101; i++) {
  unref(data)[i] = i;
}

onMounted(() => {
  getMovies();
});

const getMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US&page=1"
  );
  const data = await response.json();
  movies.value = data.results;
  console.log(data);
};
</script>

<style scoped></style>

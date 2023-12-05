<template>
  <div class="">
    <LandingScreen />
  </div>
  <!-- filer for recomandation  -->
  <div class=" space-y-4 sm:space-y-10">
    <div class="flex flex-col sm:flex-row sm:items-end items-center justify-between gap-4">
      <div class=" space-y-4">
        <p class="text-amber-400 text-xs font-semibold uppercase leading-5  text-center">Online Streaming</p>

        <h2 class="text-3xl text-center">Trending Movies</h2>
      </div>

      <ul class="flex flex-wrap justify-center items-center gap-3">
        <li>
          <el-button class="">All</el-button>
        </li>
        <li>
          <el-button class="">Movies</el-button>
        </li>
        <li>
          <el-button class="">TV Shows</el-button>
        </li>
      </ul>
    </div>
    <TrendingMovies />

  </div>
</template>

<script setup lang="ts">
import { ref, unref, onMounted } from "vue";

const movies = ref<any>([]);


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
};
</script>

<template>
  <section class="h-screen relative flex justify-center">
    <div class="flex-1 hidden lg:block mt-12 ">
      <el-carousel :interval="4000" type="card" height="450px" loop>
        <el-carousel-item v-for="movie in latestMovies" :key="movie.id" class=" rounded-2xl">
          <div class="bg-amber-500 h-full object-cover">
            <img :src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path" alt=""
              class="object-cover h-full">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <teleport to="body">
      <el-carousel height="100dvh" class="-z-10 absolute top-0 h-screen block sm:hidden w-full" loop>
        <el-carousel-item v-for="movie in latestMovies" :key="movie.id">
          <div class="h-full object-cover">
            <img :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" alt=""
              class="object-cover h-full w-full">
          </div>
        </el-carousel-item>
      </el-carousel>
    </teleport>
    <div class="absolute top-[50%] sm:top-[75%] sm:w-full ">
      <div class="flex justify-between flex-col sm:flex-row gap-10">
        <h1 class="text-3xl sm:flex items-center gap-3 ">
          <logo size="40" />Watch your favorite <span
            class="text-amber-400 underline-offset-4 underline font-bold">movies</span> online
        </h1>
        <button
          class="animate-bounce shadow-lg bg-amber-500 text-white px-4 py-1 hover:bg-amber-600 hover:scale-105 rounded-full transition ease-in-out delay-150  hover:-translate-y-1  duration-300">Randomize</button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

const latestMovies = ref<any>([]);

const getLatestMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=1f54bd990f1cdfb230adb312546d765d"
  );
  const data = await response.json();
  console.log(data);
  latestMovies.value = data.results.slice(0, 10);
};

onMounted(() => {
  getLatestMovies();
});

</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}</style>
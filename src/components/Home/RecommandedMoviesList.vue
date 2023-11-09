<template lang="">
    <ul class="movies-list has-scrollbar">
        <li
          v-for="movie in movies"
          :key="movie.id"
          class="movie-card"
          data-movie-card
        >
          <div class="movie-card">
            <a href="./movie-details">
              <figure class="card-banner">
                <img
                  :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
                  alt="The Northman movie poster"
                />
              </figure>
            </a>
    
            <div class="title-wrapper">
              <a href="./movie-details.html">
                <h3 class="card-title">
                  {{ movie.original_title }}
                </h3>
              </a>
    
              <time datetime="2022">{{ movie.release_date }}</time>
            </div>
    
            <div class="card-meta">
              <div class="badge badge-outline">HD</div>
    
              <div class="duration">
                <ion-icon name="time-outline"></ion-icon>
    
                <time datetime="PT137M">137 min</time>
              </div>
    
              <div class="rating">
                <ion-icon name="star"></ion-icon>
    
                <data>8.5</data>
              </div>
            </div>
          </div>
        </li>
      </ul>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"

const movies = ref<any>([]);

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
<style lang="">

</style>
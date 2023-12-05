<template>
    <section>
        <div class="my-4">
            <h2 class="text-lg">You may also like</h2>
        </div>
        <MovieLister :movies="movies" />
    </section>
</template>
<script lang="ts" setup>
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
    movies.value = data.results.slice(0, 10);
};
</script>
<style lang="">
    
</style>
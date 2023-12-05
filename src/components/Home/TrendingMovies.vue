<template>
    <section>
        <MovieLister :movies="movies" />
        <div class="py-5">
            <el-pagination background layout="prev, pager, next" :total="1000" :pager-count="5" hide-on-single-page />
        </div>
    </section>
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
};
</script>
<style lang="scss">

</style>
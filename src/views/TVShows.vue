<template>
    <section>
        <Filter />
        <div>
            <h1><el-text class="text-2xl py-4">TV shows</el-text></h1>
            <MovieLister :movies="movies" />
        </div>
        <div class="py-5">
            <el-pagination background layout="prev, pager, next" :total="1000" :pager-count="5" hide-on-single-page />
        </div>
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
        "https://api.themoviedb.org/3/tv/top_rated?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US&page=1"
    );
    const data = await response.json();
    movies.value = data.results
};
</script>
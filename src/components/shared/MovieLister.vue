<template>
    <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 transition-all mb-7">
        <movie-card v-for="movie in movies" :movie="movie" />
    </ul>
</template>
<script setup lang="ts">
withDefaults(defineProps<{
    movies: any[]
}>(), {
    movies: [] as any
})
</script>
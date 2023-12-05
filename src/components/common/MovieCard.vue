<template>
    <li class="movie-card transition-all" data-movie-card>
        <div class="movie-card relative movie-card-container">
            <div class="absolute top-1 right-1 z-10">
                <el-tag>
                    HD
                </el-tag>
            </div>
            <a href="/movie/5" class="overflow-hidden">
                <figure class="card-banner bg-black shadow-lg -z-10 relative overflow-hidden">
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 backdrop-blur-md  rounded-full -translate-y-1/2 play-icon">
                        <MaterialSymbolsPlayCircleOutlineRounded class=" z-50 relative text-amber-400 text-6xl" />
                    </div>
                    <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="The Northman movie poster" />
                </figure>
            </a>
            <div class="title-wrapper">
                <a href="./movie-details">
                    <h3 class="card-title">
                        <el-text>{{ movie.original_title }}</el-text>
                    </h3>
                </a>
                <!-- <el-text size="small" class="text-amber-400">
                    {{ movie.release_date }}
                </el-text> -->
            </div>
            <div class="card-meta">
                <el-tag type="info" class="badge badge-outline">Movie</el-tag>
                <div class="duration">
                    <el-text size="small">137 min</el-text>
                </div>
            </div>
        </div>
    </li>
</template>
<script lang="ts" setup>
import MaterialSymbolsPlayCircleOutlineRounded from '~icons/material-symbols/play-circle-outline-rounded'

defineProps<{ movie: any }>()

</script>
<style lang="scss" scoped>


.movie-card-container {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &:hover {
        .card-banner {
            transform: scale(1.1);
        }
        .play-icon {
            opacity: 1;
        }
    }
    
    .play-icon {
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }
}
</style>
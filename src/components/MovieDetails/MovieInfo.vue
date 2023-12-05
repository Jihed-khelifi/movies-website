<template>
    <div class="flex sm:flex-row flex-col gap-5 mt-10">
      <div class="flex flex-col gap-2 relative">
        <div class="p-3 sm:p-0">
          <img src="https://image.tmdb.org/t/p/w500//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" alt="The Northman movie poster"
            class="object-cover rounded-lg shadow-md" />
        </div>
        <div class="flex flex-col gap-2">
          <el-button class="w-full" type="primary">Trailer</el-button>
          <el-button class="w-full ml-0">
            <MaterialSymbolsFamilyStarOutline class="mr-1" />Add to
            favorite
          </el-button>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <h2><el-text class="text-xl font-bold">The Hunger Games: The Ballad of Songbirds & Snakes</el-text></h2>
          <div class="flex flex-wrap gap-2 items-center justify-center">
            <el-button>
              <SolarLikeLineDuotone class="mr-1" />Like
            </el-button>
            <el-button class="m-0">
              <SolarDislikeOutline class="mr-1" />Dislike
            </el-button>
          </div>
        </div>
        <p>
          <el-text class="leading-6 text-clip text-justify text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            necessitatibus maiores nisi expedita, tempora laboriosam ipsa aut
            pariatur qui quaerat at velit eligendi consequatur, earum explicabo
            possimus voluptatibus repellat. Dicta porro quidem tenetur dolorum,
            eaque quae quos distinctio rerum debitis?
          </el-text>
        </p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-8">
          <div class="flex flex-col gap-3">
            <div>
              <div class="flex gap-1">
                <el-text size="large">Genre: </el-text>
                <div class="flex gap-1">
                  <el-link type="primary">Link</el-link>
                  <el-link type="primary">Link</el-link>
                  <el-link type="primary">Link</el-link>
                </div>
              </div>
            </div>
            <div>
              <div class="flex gap-1">
                <el-text size="large">Actors:</el-text>
                <div class="flex gap-1">
                  <el-link type="primary">Link</el-link>
                  <el-link type="primary">Link</el-link>
                  <el-link type="primary">Link</el-link>
                </div>
              </div>
            </div>
            <div>
              <div class="flex gap-1">
                <el-text size="large">Director:</el-text>
                <div class="flex gap-1">
                  <el-link type="primary">Director</el-link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex flex-col gap-3">
              <div class="flex">
                <el-text size="large">Quality: </el-text>
                <div class="flex gap-1">
                  <div>
                    <el-tag> HD </el-tag>
                  </div>
                </div>
              </div>
              <div class="flex gap-1">
                <el-text size="large">Duration: </el-text>
                <div class="flex gap-1">
                  <el-text>1h 45m</el-text>
                </div>
              </div>
              <div class="flex gap-1">
                <el-text size="large">Rating:</el-text>
                <div class="flex gap-1">
                  <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import MaterialSymbolsFamilyStarOutline from "~icons/material-symbols/family-star-outline";
import SolarDislikeOutline from '~icons/solar/dislike-outline';
import SolarLikeLineDuotone from '~icons/solar/like-line-duotone';

const value = ref(3.5)
</script>
<template>
  <footer class="w-full px-4 py-2" :class="bgColor">
    <div class="flex flex-col-reverse sm:flex sm:flex-row justify-between gap-10 items-center py-4">
      <div class="flex-1 ">
        <logo size="60" />
        <el-text>
          Watch Movies Online For Free and Download the latest
          movies with or without Registration at moviedb.com
        </el-text>
        <el-text>Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated
          third
          parties.</el-text>
      </div>
      <div class="flex justify-evenly flex-1 w-full">
        <div class="flex flex-col space-y-3">
          <p class="font-bold">
            <el-text size="large">MovieDB</el-text>
          </p>
          <el-link type="primary">Movies</el-link>
          <el-link type="primary">TV Shows</el-link>
          <el-link type="primary">People</el-link>
        </div>
        <div class="flex flex-col space-y-3">
          <p class="font-bold"><el-text size="large">Genres</el-text></p>
          <el-link type="primary">Action</el-link>
          <el-link type="primary">Drama</el-link>
          <el-link type="primary">Family</el-link>
        </div>
      </div>

      <div class="flex-1 h-full">
        <div class="grid place-items-center gap-4">
          <h3><el-text class="text-xl font-semibold">Search for movies or TV shows</el-text></h3>
          <el-input placeholder="Search" clearable size="large">
            <template #prefix>
              <div>
                <MaterialSymbolsSearchRounded />
              </div>
            </template>
          </el-input>
        </div>
      </div>
    </div>
    <el-text class="text-center p-2 w-full bg-gray-950 rounded-md">All rights are reserved &copy; {{ year }} </el-text>
  </footer>
</template>
<script lang="ts" setup>
import MaterialSymbolsSearchRounded from '~icons/material-symbols/search-rounded'
import { ref, computed } from 'vue'
import {useBgColor} from '../composables'
// const bgColor = computed(() => useBgColor())
const bgColor =  useBgColor()

const year = ref(new Date().getFullYear())

</script>
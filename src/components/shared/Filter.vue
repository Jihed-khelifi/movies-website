<template>
    <aside class=" rounded-xl px-2 py-3 my-4" :class="bgColor">
        <h3 class="text-center pb-4"><el-text size="large">Advanced search</el-text></h3>
        <div class="flex flex-col  justify-center gap-3  sm:flex-row">
            <el-form class="flex flex-col sm:flex-row items-center justify-center gap-3">
                <div class="flex sm:flex-row gap-3">
                    <el-form-item>
                        <el-select filterable placeholder="Choose a genre" clearable v-model="temp">
                            <el-option v-for="genre in genres" :key="genre.id" :label="genre.name" :value="genre.id" />
                        </el-select>
                    </el-form-item>
                    <el-form-item class="w-20">
                        <el-date-picker type="year" placeholder="Year of release" />
                    </el-form-item>
                </div>
            
                <el-form-item>
                    <el-radio-group class="flex w-full" style="border-radius: 100px;">
                        <el-radio-button label="male" class="rounded-full">Movie</el-radio-button>
                        <el-radio-button label="female" class="">TV Show</el-radio-button>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div class="flex">
                <el-button type="primary" class="w-full" style="border-radius: 100px;">Search</el-button>
                <el-button  class="w-full" style="border-radius: 100px;">Reset</el-button>
            </div>
        </div>
    </aside>
</template>
<script lang="ts" setup>
import { genres } from "../../constants/constants"
import {ref } from "vue"
import { useBgColor } from "@composables";

const bgColor  = useBgColor();
const temp = ref("")

</script>
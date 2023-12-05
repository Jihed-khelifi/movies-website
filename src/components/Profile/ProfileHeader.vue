<template>
    <div class="border flex items-center justify-between px-2 relative h-[50px] border-gray-300 rounded-xl shadow-md">
        <div>
            <div class="absolute top-[-10px] left-5">
                <span class=" h-[70px] aspect-square rounded-full border-2 bg-slate-100 shadow-md p-1">
                    <img class="object-fit " :src="uri" />
                </span>
            </div>
            <div class=" ml-24">
                @bidin13568
            </div>
        </div>
        <div class="space-x-2 hidden sm:flex">
            <el-tag type="info">Action</el-tag>
            <el-tag type="info">Drama</el-tag>
            <el-tag type="info">Thriller</el-tag>
            <el-button size="small" circle>
                <MaterialSymbolsEdit />
            </el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { createAvatar } from '@dicebear/core';
import { bottts } from '@dicebear/collection';
import MaterialSymbolsEdit from '~icons/material-symbols/edit'
const avatar = createAvatar(bottts, {
    seed: "JIHED"
});

const uri = avatar.toDataUriSync();

</script>
<style lang="">
    
</style>
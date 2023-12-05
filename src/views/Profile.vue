<template>
    <section class="max-w-5xl mx-auto my-5">
        <ProfileHeader />
        <el-tabs v-model="activeTab" class="w-full mt-10">
            <el-tab-pane label="Watched" name="watched" class="w-full">
                <SimilarMovies/>
            </el-tab-pane>
            <el-tab-pane label="Favorite" name="Favorite">
                <SimilarMovies/>
            </el-tab-pane>
            <el-tab-pane label="Liked" name="liked"></el-tab-pane>
            <el-tab-pane label="Disliked" name="disliked"></el-tab-pane>
        </el-tabs>
    </section>
</template>
<script lang="ts" setup>
import { createAvatar } from '@dicebear/core';
import { bottts } from '@dicebear/collection';
import { ref } from 'vue';
const activeTab = ref('watched')
const avatar = createAvatar(bottts, {
  seed: "JIHED"
});

const uri = avatar.toDataUriSync();

</script>
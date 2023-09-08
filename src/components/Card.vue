<template>
   <div class="mx-10">
        <img class="h-40 w-full" />
       <h2>film name {{ value }}</h2>
   </div>
</template>

<script setup lang="ts">
defineProps<{
    value: number,
}>();
</script>

<style lang="scss" scoped>

</style>

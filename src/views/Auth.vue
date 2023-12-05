<template>
  <section class=" py-10">
    <div class="flex items-center justify-center gap-20">
      <div class="flex-1 hidden md:grid place-items-center">
        <logo size="300" />
        <h2 class="text-center">
          <el-text size="large" class="text-xl">
            Watch your favorite movies and TV shows without any hassle. Sign in to
            your account or create one to get started.
          </el-text>
        </h2>
      </div>
      <div class="flex-1">

        <LoginForm v-if="isLogInPage" />
        <RegisterForm v-else />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const isLogInPage = computed(() => route.name === "Login page");

</script>

<style scoped></style>
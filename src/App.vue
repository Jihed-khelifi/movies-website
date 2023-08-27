<template class="main">
  <nav class="items-center justify-between sticky text-gray-200 bg-gray-900 h-12 flex">
    <ul class="cursor-pointer flex items-center text-sm justify-around">
      <div class="flex items-center">
        <ApplicationLogo />
        <span class="text-lg ml-1 mr-8">
          Movies
        </span>
      </div>
      <li class="list-item">Home</li>
      <li class="list-item">Movies</li>
      <li class="list-item">Tv Series</li>
    </ul>

    <el-autocomplete v-model="filterValue" class="w-full flex-1" :prefix-icon="Search" placeholder="Rechercher ..."
      size="large" :fetch-suggestions="filterSearch" highlight-first-item :trigger-on-focus="false" clearable
      @select="filterSelect">
      <template #default="{ item }">
        <div class="flex items-center">
          {{ item.display }}
        </div>
      </template>
    </el-autocomplete>
    <div>
      <div v-if="!test" class="mx-10">
        <el-button class="h-7 w-20" type="primary" size="small">Register</el-button>
        <el-button class="h-7 w-20" type="warning" size="small">Sign-in</el-button>
      </div>
      <div v-else class="mx-4">
        <el-dropdown>
          <div class="el-dropdown-link flex items-center outline-none select-none text-white mx-4">
            <el-text class="text-white mr-3">
              <el-icon><i-ph-caret-down /></el-icon>
              <span class="ml-2">Hamza Abdellaoui</span>
            </el-text>
            <el-avatar :size="32" class="">
              HA
            </el-avatar>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item class="w-52">
                <el-text>
                  <el-icon><i-ph-identification-card /></el-icon>
                  Profil
                </el-text>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-text>
                  <el-icon>
                    <i-ph-gear-six />
                  </el-icon>
                  Settings
                </el-text>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-text>
                  <el-icon>
                    <i-ph-sign-out />
                  </el-icon>
                  Logout
                </el-text>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </nav>
  <div class="flex text-white bg-gray-900 h-full overflow-hidden relative">
    <router-view v-if="route.name !== 'FIRSTLOAD'" v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue';
import ApplicationLogo from '@components/ApplicationLogo.vue';
import { useRouter, useRoute } from 'vue-router';
import { Text } from '@utils';
import { Search } from '@element-plus/icons-vue';

const route = useRoute();
const router = useRouter();

const test = ref(true);
const data = [];

const filterValue = ref('');
const filterSelect = (data) => {
  filterValue.value = '';
  router.push(data.value);
};
const filterSearch = (queryString: string, cb) => {
  const results = queryString
    ? unref(data).filter((elm) => Text.Include(elm, queryString))
    : unref(data);
  cb(results);
};
</script>

<style scoped>
.list-item {
  @apply mx-5;
  @apply mt-1;
  @apply text-xs;
  @apply hover:text-yellow-300;
}
</style>

<template>
  <header class="w-full z-50 sm:backdrop-blur-0 backdrop-blur-sm shadow-sm">
    <!-- Desktop version -->

    <div class=" px-4 py-3 md:flex   lg:flex hidden justify-between items-center">
      <router-link :to="{ name: 'Home page' }">
        <logo />

      </router-link>
      <nav>
        <ul class="text-lg flex justify-center gap-9 items-center">
          <li>
            <router-link class="router-link" :to="{ name: 'Home page' }"><el-text size="large"
                class="hover:text-amber-400">Home</el-text></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Movies page' }"><el-text size="large"
                class="hover:text-amber-400">Movies</el-text></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'TV shows page' }"><el-text size="large" class="hover:text-amber-400">TV
                Shows</el-text></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'People page' }"><el-text size="large"
                class="hover:text-amber-400">People</el-text></router-link>
          </li>
          <li>
            <el-dropdown split-button>
              <el-text size="large">Genre</el-text>
              <template #dropdown>
                <el-dropdown-menu>
                  <div class="grid grid-rows-5 grid-flow-col gap-3">
                    <div v-for="genre in genres" :key="genre.id">
                      <el-dropdown-item>{{ genre.name }}</el-dropdown-item>
                    </div>
                  </div>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
        </ul>
      </nav>
      <div class="flex flex-row gap-2">
        <div><el-input placeholder="Search" clearable>
            <template #prefix>
              <div>
                <MaterialSymbolsSearchRounded />
              </div>
            </template>
          </el-input> </div>
        <el-dropdown v-if="isLoggedIn">
          <button>
            <span class=" h-[40px] aspect-square rounded-full  object-cover border-2 bg-slate-100 shadow-md ">
              <img class="object-cover " :src="uri" />
            </span>
          </button>
          <template #dropdown>

            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link to="profile/example">Profile</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button type="danger" @click="handleLogout">
                  Sign out
                </el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-button type="primary" @click="redirectTo" v-else class="m-0">
          Log in
          <!-- <MaterialSymbolsAccountCircleFull /> -->
        </el-button>
        <el-button @click="toggleDark()" class="ml-0">
          <MaterialSymbolsLightModeOutline class="text-md" v-if="isDark" />
          <BiMoonStarsFill class="text-md" v-else />
        </el-button>
      </div>

    </div>
    <!-- Mobile version -->
    <div class="flex justify-between items-center h-min px-4 py-2 md:hidden">
      <div>
        <router-link :to="{ name: 'Home page' }">
          <logo />
        </router-link>
      </div>
      <div class="flex items-center gap-3">
        <el-dropdown v-if="isLoggedIn">
          <button>
            <span class=" h-[40px] aspect-square rounded-full  object-cover border-2 bg-slate-100 shadow-md ">
              <img class="object-cover " :src="uri" />
            </span>
          </button>
          <template #dropdown>

            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link to="profile/example">Profile</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button type="danger" @click="handleLogout">
                  Sign out
                </el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-button type="primary" class="m-0" @click="redirectTo" v-else>
          Log in
          <!-- <MaterialSymbolsAccountCircleFull /> -->
        </el-button>
        <el-button @click="toggleDark()" class="m-0">
          <MaterialSymbolsLightModeOutline class="text-md" v-if="!isDark" />
          <BiMoonStarsFill class="text-md" v-else />
        </el-button>
        <div role="button" class="" @click="drawer = true">
          <UilBars class="text-2xl" />
        </div>
      </div>
      <el-drawer v-model="drawer" class="w-2/3" :class="bgColor" :show-close="true" append-to-body lock-scroll>

        <ul class="grid gap-3">
          <li>
            <el-input placeholder="Search" clearable>
              <template #prefix>
                <div>
                  <MaterialSymbolsSearchRounded />
                </div>
              </template>
            </el-input>
          </li>
          <li>
            <router-link class="router-link" :to="{ name: 'Home page' }"><el-text size="large"
                class="text-amber-400 underline underline-offset-4">Home</el-text></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Movies page' }"><el-text size="large"
                class="text-amber-400 underline underline-offset-4">Movies</el-text></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'TV shows page' }"><el-text size="large"
                class="text-amber-400 underline underline-offset-4">TV
                Shows</el-text></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'People page' }"><el-text size="large"
                class="text-amber-400 underline underline-offset-4">People</el-text></router-link>
          </li>
          <li>
            <el-text size="large" class="mb-2">Genres :</el-text>
            <div class="ml-2 grid grid-flow-row grid-cols-2 gap-2">
              <el-tag type="info" v-for="genre in genres" :key="genre.id">
                {{ genre.name }}
              </el-tag>
            </div>
          </li>
          <li class="drawer-registeration-item" v-if="!isLoggedIn">
            <router-link :to="{ name: 'Register page' }"><el-text size="large"
                class="text-amber-400 underline underline-offset-4">Create an account</el-text></router-link>
            <el-divider><el-text size="small">OR</el-text></el-divider>
            <div class=" text-center py-4">
              <el-button circle size="large">
                <LogosGoogleIcon class="text-xl" />
              </el-button>
              <el-button circle size="large">
                <IcBaselineApple class="text-2xl" />
              </el-button>
            </div>
          </li>
        </ul>
      </el-drawer>
    </div>
  </header>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from "vue";
import { useRouter } from "vue-router";
import BiMoonStarsFill from '~icons/bi/moon-stars-fill';
import IcBaselineApple from '~icons/ic/baseline-apple';
import LogosGoogleIcon from '~icons/logos/google-icon';
import MaterialSymbolsAccountCircleFull from '~icons/material-symbols/account-circle-full';
import MaterialSymbolsLightModeOutline from '~icons/material-symbols/light-mode-outline';
import MaterialSymbolsSearchRounded from '~icons/material-symbols/search-rounded';
import UilBars from '~icons/uil/bars';
import { isDark, toggleDark, useBgColor } from "../composables";
import { useAuthStore } from '../store/authStore';
import { genres } from '../constants/constants'
import { bottts } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';


const router = useRouter()
const authStore = useAuthStore()
const { isLoggedIn } = storeToRefs(authStore)

const bgColor = useBgColor()

const drawer = ref(false)

const avatar = createAvatar(bottts, {
  seed: "JIHED"
});

const uri = avatar.toDataUriSync();

const redirectTo = () => {
  console.log(isLoggedIn.value)
  if (isLoggedIn.value) {
    router.push({
      name: 'Profile',
      params: { vanity: "exemple" }
    })
  } else {
    router.push({ name: 'Login page' })
  }
}

const handleLogout = () => {
  authStore.logout()
  router.push({ name: 'Home page' })
}

</script>
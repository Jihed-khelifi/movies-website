<template>
  <header class="header" data-header>
    <div class="container">
      <div class="overlay" data-overlay></div>

      <ApplicationLogo />

      <div class="header-actions">
        <button class="search-btn">
          <ion-icon name="search-outline"></ion-icon>
        </button>

        <div class="lang-wrapper">
          <label for="language">
            <ion-icon name="globe-outline"></ion-icon>
          </label>

          <select name="language" id="language">
            <option value="en">EN</option>
            <option value="au">AU</option>
            <option value="ar">AR</option>
            <option value="tu">TU</option>
          </select>
        </div>
        <el-link href="/login">
          <button class="btn btn-primary">Sign in</button>
        </el-link>
      </div>

      <button class="menu-open-btn" data-menu-open-btn>
        <!-- <ion-icon name="reorder-two"></ion-icon> -->
      </button>

      <nav class="navbar" data-navbar>
        <div class="navbar-top">
          <a href="./index.html" class="logo">
            <img src="./assets/images/logo.svg" alt="Filmlane logo" />
          </a>

          <button class="menu-close-btn" data-menu-close-btn>
            <!-- <ion-icon name="close-outline"></ion-icon> -->
          </button>
        </div>

        <ul class="navbar-list">
          <li>
            <el-link href="/" class="no-underline">
              <a class="navbar-link">Home</a>
            </el-link>
          </li>

          <li>
            <el-link>
              <a href="#" class="navbar-link">Movies</a>
            </el-link>
          </li>

          <li>
            <el-link>
              <a href="#" class="navbar-link">Tv Series</a>
            </el-link>
          </li>

          <li>
            <el-link>
              <a href="#" class="navbar-link">People</a>
            </el-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<!-- 
<script setup  lang="ts">
import ApplicationLogo from "@components/ApplicationLogo.vue";
</script> -->
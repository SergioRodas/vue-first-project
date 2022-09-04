<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
  <RouterView />
</template>

<style>
@import './assets/base.css';
</style>

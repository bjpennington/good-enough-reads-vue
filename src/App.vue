<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1>Good Enough Reads</h1>
    <nav>
      <RouterLink to="/">Books</RouterLink>
      <RouterLink to="/tags">Tags</RouterLink>
      <RouterLink to="/account">Account</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

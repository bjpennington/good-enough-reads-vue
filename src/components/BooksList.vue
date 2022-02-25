<script setup lang="ts">
import { ref } from "vue";
import { books } from "../assets/books";

const bookList = ref(books);
</script>

<template>
  <ul>
    <li v-for="book in bookList" :key="book.id">
      <router-link :to="{ name: 'book', params: { id: book.id } }">
        <h3>{{ book.title }}</h3>
        <p>{{ book.author }}</p>
        <small>{{ book.rating }}/5</small>
        <br />
        <small>{{ book.notes }}</small>
        <br />
        <small>{{ book.synopsis }}</small>
        <img :src="book.cover" class="h-40" />
      </router-link>
    </li>
  </ul>
</template>

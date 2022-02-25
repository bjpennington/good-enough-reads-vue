<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { books } from "../assets/books";

const route = useRoute();
const id = route.params.id;
console.log("id", id);

const book = ref(books.find((b) => b.id === id));
</script>

<template>
  <h2 v-if="book === undefined">Book not found</h2>
  <div v-else>
    <h2>{{ book.title }}</h2>
    <h3>{{ book.author }}</h3>
    <p>{{ book.rating }}/5</p>
    <p>{{ book.notes }}</p>
    <p>{{ book.synopsis }}</p>
    <img :src="book.cover" />
  </div>
</template>

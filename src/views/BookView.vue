<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { books } from "../assets/books";

const route = useRoute();
const id = route.params.id;

const editMode = ref(false);
const book = ref(books.find((b) => b.id === id));
</script>

<template>
  <h2 v-if="book === undefined">Book not found</h2>
  <div v-else>
    <div v-if="editMode">
      <div>
        <label for="title">Title</label>
        <input v-model="book.title" name="title" />
      </div>
      <div>
        <label for="author">Author</label>
        <input v-model="book.author" name="author" />
      </div>
      <div>
        <label for="rating">Rating</label>
        <input
          v-model="book.rating"
          name="rating"
          type="number"
          min="1"
          max="10"
        />
      </div>
      <div>
        <label for="notes">Notes</label>
        <textarea v-model="book.notes" name="notes" />
      </div>
      <div>
        <label for="synopsis">Synopsis</label>
        <textarea v-model="book.synopsis" name="synopsis" />
      </div>
      <button @click="editMode = false">Save</button>
      <button>Cancel</button>
    </div>
    <div v-else>
      <h2>{{ book.title }}</h2>
      <h3>{{ book.author }}</h3>
      <p>{{ book.rating }}/5</p>
      <p>{{ book.notes }}</p>
      <p>{{ book.synopsis }}</p>
      <button @click="editMode = true">Edit</button>
    </div>
    <img :src="book.cover" />
  </div>
</template>

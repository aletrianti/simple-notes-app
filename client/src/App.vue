<script setup>
import { ref, watch } from 'vue';
import debounce from 'lodash.debounce';
// components
import List from './components/List.vue';
import Note from './components/Note.vue';

// stores
import { useNotesStore } from './stores/notes';
const notesStore = useNotesStore();

const openCreateNoteModal = () => {

};

const openEditNoteModal = (note) => {

};

const openDeleteNoteModal = (note) => {

};

</script>

<template>
  <header class="app__header p-4 flex justify-center bg-sky-50">
    <input 
      v-model="notesStore.searchQuery" 
      type="text" 
      placeholder="Search..." 
      class="app__header__input bg-white border-1 border-sky-200 hover:border-sky-400 rounded-3xl p-2 pl-4 w-md"
    >
  </header>

  <main class="app__main flex flex-col w-full items-center pr-6 pl-6">
    <h1 class="app__main__title text-sky-900 mt-6 mb-6 text-center">Just a simple note app</h1>

    <button 
      class="app__main__create-button p-6 pt-4 pb-4 mb-6 bg-sky-100 border-1 border-sky-300 hover:border-sky-400 rounded-3xl cursor-pointer font-bold text-sky-500"
      @click="openCreateNoteModal"
    >
      Create note
    </button>

    <List/>
  </main>

  <Note v-if="notesStore.selectedNote" @edit="openEditNoteModal" @delete="openDeleteNoteModal"/>
  
</template>

<style scoped>

</style>

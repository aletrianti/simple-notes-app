<script setup>
// components
import List from './components/List.vue';
import ViewNote from './components/Modals/ViewNote.vue';
import CreateOrEditNote from './components/Modals/CreateOrEditNote.vue';

// stores
import { useNotesStore } from './stores/notes';
const notesStore = useNotesStore();

const openCreateNoteModal = () => {
  notesStore.openModal('create', { title: '', description: '' });
};

const openEditNoteModal = (note) => {
  notesStore.openModal('create', note);
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

  <ViewNote v-if="notesStore.selectedNote && notesStore.activeModal === 'view'" @edit="openEditNoteModal" @delete="openDeleteNoteModal"/>

  <CreateOrEditNote v-if="notesStore.activeModal === 'create'"/>
  
</template>

<style>
.note__background {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

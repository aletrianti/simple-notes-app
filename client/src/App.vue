<script setup>
  // components
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import ViewNote from './components/Modals/ViewNote.vue';
  import CreateOrEditNote from './components/Modals/CreateOrEditNote.vue';
  import DeleteNote from './components/Modals/DeleteNote.vue';

  // stores
  import { useNotesStore } from './stores/notes';
  const notesStore = useNotesStore();
</script>

<template>
  <Header/>

  <Main/>

  <ViewNote v-if="notesStore.selectedNote && notesStore.activeModal === 'view'"/>

  <CreateOrEditNote v-if="notesStore.activeModal === 'create'"/>

  <DeleteNote v-if="notesStore.activeModal === 'delete'" />
</template>

<style>
.modal__background {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  margin: 0 1rem;
}
</style>

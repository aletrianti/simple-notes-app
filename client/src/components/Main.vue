<script setup>
    import List from './List.vue';

    import { useNotesStore } from '../stores/notes';
    const notesStore = useNotesStore();

    const openCreateNoteModal = () => {
        notesStore.openModal('create', { title: '', description: '' });
    };
</script>

<template>
    <div class="app__main flex flex-col w-full items-center pr-6 pl-6">
        <h1 class="app__main__title text-sky-900 mt-6 mb-6 text-center">Just a simple note app</h1>

        <button 
            class="app__main__create-button p-6 pt-4 pb-4 mb-6 bg-sky-100 border-1 border-sky-300 hover:border-sky-400 rounded-3xl cursor-pointer font-bold text-sky-500"
            @click="openCreateNoteModal"
        >
            Create note
        </button>

        <List/>
    </div>
</template>

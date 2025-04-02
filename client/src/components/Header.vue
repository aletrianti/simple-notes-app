<script setup>
import { useNotesStore } from '../stores/notes';
const notesStore = useNotesStore();
</script>

<template>
    <header class="app__header p-4 flex justify-center bg-sky-50">
        <input 
            :value="notesStore.searchQuery"
            @input="notesStore.updateSearchQuery($event.target.value)"
            type="text" 
            placeholder="Search..." 
            class="app__header__input bg-white border-1 border-sky-200 hover:border-sky-400 rounded-3xl p-2 pl-4 w-md"
        />
    </header>
</template>

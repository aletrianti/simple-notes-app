<script setup>
    import menu from '@/assets/icons/menu.svg';
    import date from '../utils/date';
    import { onMounted } from 'vue';
    import { useNotesStore } from '../stores/notes';
    const notesStore = useNotesStore();

    const openModal = (note) => {
        notesStore.selectNote(note)
    };

    onMounted(() => {
        notesStore.getNotes();
    });
</script>

<template>
    <div id="list" class="w-full">
        <ul class="flex flex-wrap justify-center">
            <li 
                v-for="note in notesStore.filteredNotes"
                class="item__card w-xs p-4 m-2 border-1 border-sky-100 rounded-xl cursor-pointer hover:border-sky-200 hover:bg-sky-50" 
                @click="openModal(note)"
            >
                <span class="item__card__title font-bold">
                    {{ note.title }}
                </span>

                <p class="item__card_description mb-2">
                    {{ note.description }}
                </p>

                <span class="item__card__updated-date italic text-gray-400 text-xs">
                    {{ date.formatDate(note.updatedAt) }}
                </span>
            </li>
        </ul>
    </div>
</template>
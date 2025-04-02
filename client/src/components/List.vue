<script setup>
    import date from '../utils/date';
    import text from '../utils/text';
    import { onMounted } from 'vue';
    import { useNotesStore } from '../stores/notes';
    const notesStore = useNotesStore();

    const openModal = (note) => {
        notesStore.openModal('view', note);
    };

    onMounted(() => {
        notesStore.getNotes();
    });
</script>

<template>
    <div id="list" class="w-full">
        <span v-if="notesStore.notes.length === 0" class="list__no-results">
            There are no notes yet. Create your first one!
        </span>
        
        <span v-else-if="notesStore.filteredNotes.length === 0" class="list__no-results">
            No notes found.
        </span>

        <ul v-else class="flex flex-wrap items-start justify-center">
            <li 
                v-for="note in notesStore.filteredNotes"
                class="item__card w-xs p-4 m-2 border-1 border-sky-100 rounded-xl hover:border-sky-200 hover:bg-sky-20" 
            >
                <span class="item__card__title font-bold">
                    {{ note.title }}
                </span>

                <p class="item__card_description mb-2">
                    {{ text.truncateText(note.description, 100) }}
                </p>

                <div class="item__card__footer flex justify-between items-end">
                    <span class="item__card__footer__updated-date italic text-gray-400 text-xs">
                        {{ date.formatDate(note.updatedAt) }}
                    </span>

                    <button 
                        class="item__card__footer__open-button p-2 pt-1 pb-1 border-1 border-sky-100 bg-white rounded-xl hover:border-sky-200 hover:bg-sky-100 cursor-pointer"
                        @click="openModal(note)"
                    >
                        Open
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style>
.list__no-results {
    display: flex;
    justify-content: center;
}
</style>

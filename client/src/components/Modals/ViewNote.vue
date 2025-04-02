<script setup>
    import cross from '@/assets/icons/cross.svg';
    import { useNotesStore } from '../../stores/notes';
    const notesStore = useNotesStore();

    const closeModal = () => {
        notesStore.closeModal();
    };
</script>

<template>
    <div class="note__background fixed inset-0 z-50 flex items-center justify-center">
        <div class="note p-6 w-md rounded-3xl bg-white">
            <div class="note__header flex w-full justify-between mb-4">
                <h2 class="note__header_title w-5/6 pb-2 text-2xl font-bold border-b-1 border-sky-100">
                    {{ notesStore.selectedNote.title }}
                </h2>

                <img 
                    class="note__header_close-btn cursor-pointer w-6" 
                    :src="cross" 
                    alt="close-button" 
                    @click="closeModal"
                />
            </div>

            <p class="note__description">
                {{ notesStore.selectedNote.description }}
            </p>

            <div class="note__cta flex justify-end mt-4">
                <button 
                    @click="$emit('edit', notesStore.selectedNote)" 
                    class="note__cta_edit mt-px p-4 pt-2 pb-2 border-1 border-orange-100 rounded-xl hover:border-orange-200 hover:bg-orange-100 cursor-pointer"
                >
                    Edit
                </button>

                <button 
                    @click="$emit('delete', notesStore.selectedNote)" 
                    class="note__cta_delete mt-px ml-2 p-4 pt-2 pb-2 border-1 border-red-100 rounded-xl hover:border-red-200 hover:bg-red-100 cursor-pointer"
                >
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

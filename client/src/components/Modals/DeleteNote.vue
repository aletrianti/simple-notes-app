<script setup>
    import cross from '@/assets/icons/cross.svg';
    import { toast } from 'vue3-toastify';
    import { useNotesStore } from '../../stores/notes';
    const notesStore = useNotesStore();

    const closeModal = () => {
        notesStore.closeModal();
    };

    const deleteNote = async () => {
        const result = await notesStore.deleteNote(notesStore.selectedNote);

        if (result.success) {
            toast.success("Your note was deleted successfully.");

            notesStore.notes = notesStore.notes.filter(note => note._id !== result.id);

            closeModal();
        } else {
            toast.error("Something went wrong. Please, try again.");
        }
    };
</script>

<template>
    <div class="modal__background fixed inset-0 z-50 flex items-center justify-center">
        <div class="modal p-6 w-sm rounded-3xl bg-white">
            <div class="modal__header flex w-full justify-between mb-4">
                <h2 class="modal__header_title pb-2 text-lg font-bold">
                    {{ `Delete note "${notesStore.selectedNote.title}"?` }}
                </h2>

                <img 
                    class="modal__header_close-btn cursor-pointer w-6" 
                    :src="cross" 
                    alt="close-button" 
                    @click="closeModal"
                />
            </div>

            <p class="modal__description"> 
                {{ `This action cannot be undone! Are you sure you want to delete "${notesStore.selectedNote.title}"?` }}
            </p>

            <div class="modal__cta flex justify-end mt-4">
                <button 
                    @click="closeModal" 
                    class="modal__cta_edit mt-px p-4 pt-2 pb-2 border-1 border-gray-100 rounded-xl hover:border-gray-200 hover:bg-gray-100 cursor-pointer"
                >
                    Back
                </button>

                <button 
                    @click="deleteNote" 
                    class="modal__cta_delete mt-px ml-2 p-4 pt-2 pb-2 border-1 border-red-100 rounded-xl hover:border-red-200 hover:bg-red-100 cursor-pointer"
                >
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

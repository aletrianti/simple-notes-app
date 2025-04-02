<script setup>
    import cross from '@/assets/icons/cross.svg';
    import { toast } from 'vue3-toastify';
    import { useNotesStore } from '../../stores/notes';
    const notesStore = useNotesStore();

    const closeModal = () => {
        notesStore.closeModal();
    };

    const create = async () => {
        const result = await notesStore.createNote(notesStore.selectedNote);

        if (result.success) {
            toast.success("Your note was created!");
            closeModal();
        } else {
            toast.error("Something went wrong. Please, try again.");
        }
    };

    const edit = async () => {
        const result = await notesStore.editNote(notesStore.selectedNote);

        if (result.success) {
            toast.success("Changes have been saved!");
            closeModal();
        } else {
            toast.error("Something went wrong. Please, try again.");
        }
    };
</script>

<template>
    <div class="modal__background fixed inset-0 z-50 flex items-center justify-center">
        <div class="modal p-6 w-md rounded-3xl bg-white">
            <div class="modal__header flex w-full justify-between mb-4">
                <input v-model="notesStore.selectedNote.title" placeholder="Add a title" class="modal__header_title w-5/6 pb-2 text-2xl font-bold border-b-1 border-sky-100"/>

                <img 
                    class="note__header_close-btn cursor-pointer w-6" 
                    :src="cross" 
                    alt="close-button" 
                    @click="closeModal"
                />
            </div>

            <textarea v-model="notesStore.selectedNote.description" placeholder="Add your note here" class="modal__description w-full min-h-[20rem] max-h-60 p-2 resize-none overflow-auto"></textarea>

            <div class="modal__cta flex justify-end mt-4">
                <button 
                    @click="closeModal" 
                    class="modal__cta_edit mt-px p-4 pt-2 pb-2 border-1 border-gray-100 rounded-xl hover:border-gray-200 hover:bg-gray-100 cursor-pointer"
                >
                    Back
                </button>

                <button 
                    @click="!notesStore.selectedNote._id ? create() : edit()" 
                    class="modal__cta_save mt-px ml-2 p-4 pt-2 pb-2 border-1 border-sky-100 rounded-xl hover:border-sky-200 hover:bg-sky-100 cursor-pointer"
                >
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

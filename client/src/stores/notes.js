import { defineStore } from 'pinia';
//import axios from 'axios';
import api from '../utils/axios';

export const useNotesStore = defineStore('notes', {
    state: () => ({
        notes: [],
        selectedNote: null,
        updatedNote: null,
        searchQuery: ''
    }),

    getters: {
        filteredNotes(state) {
            return state.notes.filter(note =>
                note.title.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        },
    },

    actions: {
        async getNotes() {
            try {
                const response = await api.get('/notes');
                this.notes = response.data;
            } catch(err) {
                console.error(err);
            }
        },

        selectNote(note) {
            this.selectedNote = note;
        },
    },
  })

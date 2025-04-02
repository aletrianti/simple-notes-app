import { defineStore } from 'pinia';
//import axios from 'axios';
import api from '../utils/axios';

export const useNotesStore = defineStore('notes', {
    state: () => ({
        notes: [],
        selectedNote: null,
        activeModal: null, // 'view', 'create', or 'delete'
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
                return { success: true };
            } catch(err) {
                console.error(err);
                return { success: false, error: err };
            }
        },

        async createNote(note) {
            try {
                await api.post('/notes', note);
                return { success: true };
            } catch(err) {
                console.error(err);
                return { success: false, error: err };
            }
        },

        async editNote(note) {
            try {
                await api.put(`/notes/${note._id}`, note);
                return { success: true };
            } catch(err) {
                console.error(err);
                return { success: false, error: err };
            }
        },

        async deleteNote(note) {
            try {
                await api.delete(`/notes/${note._id}`, note);
                return { success: true };
            } catch(err) {
                console.error(err);
                return { success: false, error: err };
            }
        },

        selectNote(note) {
            this.selectedNote = note;
        },

        openModal(type, note) {
            this.activeModal = type;
            this.selectNote(note);
        },
        closeModal() {
            this.activeModal = null;
            this.selectNote(null);
        }
    },
  })

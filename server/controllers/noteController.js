const noteService = require("../services/noteService");

// @desc Get all notes
// @route GET /api/notes
const getNotes = async (req, res) => {
    await noteService.getNotes(req, res);
};

// @desc Get note
// @route GET /api/notes/:id
const getNote = async (req, res) => {
    await noteService.getNote(req, res);
};

// @desc Create note
// @route POST /api/notes
const createNote = async (req, res) => {
    await noteService.createNote(req, res);
};

// @desc Update note
// @route PUT /api/notes/:id
const updateNote = async (req, res) => {
    await noteService.updateNote(req, res);
};

// @desc Delete note
// @route DELETE /api/notes/:id
const deleteNote = async (req, res) => {
    await noteService.deleteNote(req, res);
}

module.exports = {
    getNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote
};

const Note = require("../models/Note");

// @desc Get all notes
// @route GET /api/notes
const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();

        res.status(200).json(notes);
    } catch(e) {
        res.status(500).json({ error: error.message });
    }
};

// @desc Get note
// @route GET /api/notes/:id
const getNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            res.status(400);
            throw Error(`Cannot find note with id ${req.params.id}`);
        }

        res.status(200).json(note);
    } catch(e) {
        res.status(500).json({ error: error.message });
    }
};

// @desc Create note
// @route POST /api/notes
const createNote = async (req, res) => {
    try {
        const {title, description} = req.body;

        if (!title || !description) {
            res.status(400);
            throw Error("All fields are required");
        }

        const note = await Note.create({ title, description });
    
        res.status(201).json(note);
    } catch(e) {
        res.status(500).json({ error: error.message });
    }
};

// @desc Update note
// @route PUT /api/notes/:id
const updateNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            res.status(400);
            throw Error(`Cannot find note with id ${req.params.id}`);
        }

        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(updatedNote);
    } catch(e) {
        res.status(500).json({ error: error.message });
    }
};

// @desc Delete note
// @route DELETE /api/notes/:id
const deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            res.status(400);
            throw Error(`Cannot find note with id ${req.params.id}`);
        }

        const updatedNote = await Note.deleteOne({ _id: req.params.id });

        res.status(200).json(updatedNote);
    } catch(e) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote
};

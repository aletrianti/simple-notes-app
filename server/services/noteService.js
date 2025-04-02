const noteRepository = require("../repositories/noteRepository");

const getNotes = async (req, res) => {
    try {
        const notes = await noteRepository.findAll();

        res.status(200).json(notes);
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
};

const getNote = async (req, res) => {
    try {
        const note = await noteRepository.findById(req.params.id);

        if (!note) {
            res.status(400);
            throw Error(`Cannot find note with id ${req.params.id}`);
        }

        res.status(200).json(note);
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
};

const createNote = async (req, res) => {
    try {
        const {title, description} = req.body;

        if (!title || !description) {
            res.status(400);
            throw Error("All fields are required");
        }

        const note = await noteRepository.create({ title, description });
    
        res.status(201).json(note);
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
};

const updateNote = async (req, res) => {
    try {
        const note = await noteRepository.findById(req.params.id);
        const { title, description } = req.body;

        if (!note) {
            res.status(400);
            throw Error(`Cannot find note with id ${req.params.id}`);
        }

        if (!title || !description) {
            res.status(400);
            throw Error("All fields are required");
        }

        const updatedNote = await noteRepository.update(req.params.id, req.body);

        res.status(200).json(updatedNote);
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
};

const deleteNote = async (req, res) => {
    try {
        const note = await noteRepository.findById(req.params.id);

        if (!note) {
            res.status(400);
            throw Error(`Cannot find note with id ${req.params.id}`);
        }

        const updatedNote = await noteRepository.remove(req.params.id);

        res.status(200).json(updatedNote);
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
}

module.exports = {
    getNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote
};


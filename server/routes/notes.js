const express = require("express");
const router = express.Router();
const {
    getNotes,
    getNote,
    createNote,
    updateNote,
    deleteNote
} = require("../controllers/noteController");

router.route("/").get(getNotes);
router.route("/:id").get(getNote);
router.route("/").post(createNote);
router.route("/:id").put(updateNote);
router.route("/:id").delete(deleteNote);

module.exports = router;

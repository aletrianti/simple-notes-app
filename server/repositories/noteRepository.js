const Note = require("../models/Note");

const findAll = () => Note.find();

const findById = (id) => Note.findById(id);

const create = (data) => Note.create(data);

const update = (id, data) => Note.findByIdAndUpdate(id, data, { new: true });

const remove = (id) => Note.deleteOne({ _id: id });

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};

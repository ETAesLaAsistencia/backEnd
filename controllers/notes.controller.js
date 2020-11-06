const notesCtrl = {};

// Models
const Note = require("../models/Note");

notesCtrl.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

notesCtrl.createNewNote = async (req, res) => {
  const { encargado, descripcion } = req.body;
  const errors = [];
  if (!encargado) {
    errors.push({ text: "Porfavor ingrese un encargado." });
  }
  if (!descripcion) {
    errors.push({ text: "Porfavor ingrese una descripcion" });
  }
  if (errors.length > 0) {
    res.render("notes/new-note", {
      errors,
      encargado,
      descripcion,
    });
  } else {
    const newNote = new Note({ encargado, descripcion });
    newNote.user = req.user.id;
    await newNote.save();
    req.flash("success_msg", "Agregado exitosamente");
    res.redirect("/notes");
  }
};

notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id })
    .sort({ date: "desc" })
    .lean();
  res.render("notes/all-notes", { notes });
};

notesCtrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  if (note.user != req.user.id) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/notes");
  }
  res.render("notes/edit-note", { note });
};

notesCtrl.updateNote = async (req, res) => {
  const { encargado, descripcion } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { encargado, descripcion });
  req.flash("success_msg", "actualizado exitosamente");
  res.redirect("/notes");
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Eliminado exitosamente");
  res.redirect("/notes");
};

module.exports = notesCtrl;

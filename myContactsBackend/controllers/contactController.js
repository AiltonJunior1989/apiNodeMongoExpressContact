//asyncHandler substitui o try/cat passando a mensagem de erro quando estiver a mesma
import asyncHandler from "express-async-handler";
import Contact from '../models/contactModel.js';

//@desc Get all contacts
//@route Get /api/contacts
//@access private
export const getContacts = asyncHandler(async (req, res) => {
  // busca todos os contatos
  //const contacts = await Contact.find();
  // busca os contatos do usuário que está logado
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts)
});

//@desc Create New contacts
//@route POST /api/contacts
//@access private
export const createContact = asyncHandler(async (req, res) => {
  //console.log(req);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('All fields are mandatory!');
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id
  })
  res.status(201).json({ message: 'Create contact.' });
});

//@desc GET contact
//@route GET /api/contacts/:id
//@access private
export const getContact = asyncHandler(async (req, res) => {
  //console.log(req.params)
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('Contact not found!');
  }
  res.status(200).json(contact);
});

//@desc UPDATE contact
//@route UPDATE /api/contacts/:id
//@access private
export const updateContact = asyncHandler(async (req, res) => {

  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('Contact not found!');
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contact");
  }

  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json(updateContact);
});

//@desc DELETE contact
//@route DELETE /api/contacts/:id
//@access private
export const deleteContact = asyncHandler(async (req, res) => {

  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('Contact not found!');
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to delete other user contact");
  }

  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(contact);
});



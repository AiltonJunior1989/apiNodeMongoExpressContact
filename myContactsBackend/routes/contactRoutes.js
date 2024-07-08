import express from 'express';
import { getContact, createContact, getContacts, updateContact, deleteContact } from '../controllers/contactController.js';
import { validateToken } from '../middleware/validateTokenHandler.js';

const router = express.Router();

router.use(validateToken);

router.route("/").get(getContacts);

router.route("/").post(createContact);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

export default router;
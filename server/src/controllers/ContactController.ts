import {Request, Response} from 'express';
import {ContactService} from '../services/contactService';
import {Contact} from "../models";

export class ContactController {
    static async create(req : Request, res : Response) {
        try {
            const contact = await ContactService.createContact(req.body);
            res.status(201).json(contact);
        } catch (error) {
            res.status(500).json({error: 'Failed to create contact'});
        }
    }

    static async getAll(req : Request, res : Response) {
        try {
            const contacts : Contact[] = await ContactService.getAllContacts();
            res.status(201).json(contacts);
        } catch (error) {
            res.status(500).json({error: 'Failed to fetch contacts'});
        }
    }

    static async getById(req : Request, res : Response) {
        try {
            const contact : Contact | null = await ContactService.getContactById(parseInt(req.params.id));
            res.status(201).json(contact);
        } catch (error) {
            res.status(500).json({error: 'Failed to fetch contact'});
        }
    }

    static async delete(req : Request, res : Response) {
        try {
            await ContactService.deleteContact(parseInt(req.params.id));
            res.status(201).json({message: 'Contact deleted'});
        } catch (error) {
            res.status(500).json({error: 'Failed to delete contact'});
        }
    }
}

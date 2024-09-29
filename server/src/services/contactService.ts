import Contact from '../models/Contact';

export class ContactService {
    static async createContact(data : { firstName : string; lastName : string; email : string; message : string }) {
        return await Contact.create(data);
    }

    static async getAllContacts() {
        return await Contact.findAll();
    }

    static async getContactById(id : number) {
        return await Contact.findByPk(id);
    }

    static async deleteContact(id : number) {
        return await Contact.destroy({where: {id}});
    }
}

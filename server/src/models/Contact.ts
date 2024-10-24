import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Contact extends Model {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public subject!: string;
    public message!: string;
}

Contact.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Contact',
});

export default Contact;

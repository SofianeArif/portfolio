import sequelize from '../config/database';
import Contact from './Contact';
import Review from './Review';

const initModels = () => {
    Contact.sync();
    Review.sync();
};

export { sequelize, initModels, Contact, Review };

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Review extends Model {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public rating!: number;
    public comment!: string;
}

Review.init({
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
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        },
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    approved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'Review',
});

export default Review;

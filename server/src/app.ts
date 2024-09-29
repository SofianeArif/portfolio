import express from 'express';
import {initModels, sequelize} from './models';
import router from "./routes";
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const app = express();

initModels();

sequelize.authenticate().then(() => {
    console.log('Database connected');
    initApp();
}).catch(err => {
    console.log('Error: ' + err);
});

function initApp() {
    app.use(express.json());
    app.use(cors());
    app.use(router);

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export default app;

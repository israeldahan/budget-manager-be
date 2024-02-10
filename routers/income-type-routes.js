import express from 'express';

import incomeTypeController from '../controllers/income-type-controller.js';

const router = express.Router();

export default class IncomeTypeRoutes {
    constructor() {
        router.get('/', incomeTypeController.getAll);
        router.get('/:id', incomeTypeController.getById);
        router.post('/', incomeTypeController.create);
        router.put('/:id', incomeTypeController.update);
        router.delete('/:id', incomeTypeController.delete);
    }
    
    getRouter() {
        return router;
    }
}

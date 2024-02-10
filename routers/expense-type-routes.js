import express from 'express';

import expenseTypeController from '../controllers/expense-type-controller.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

export default class ExpenseTypeRouter {
    constructor() {
        router.get('/', auth, expenseTypeController.getAll);
        router.get('/:id', auth, expenseTypeController.getById);
        router.post('/', auth, expenseTypeController.create);
        router.put('/:id', auth, expenseTypeController.update);
        router.delete('/:id', auth, expenseTypeController.delete);
    }

    getRouter() {
        return router;
    }
}
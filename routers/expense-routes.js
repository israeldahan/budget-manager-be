import express from 'express';

import expenseController from '../controllers/expense-controller.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

export default class ExpenseRouter {
    constructor() {
        router.get('/', auth, expenseController.getAll);
        router.get('/:id', auth, expenseController.getById);
        router.post('/', auth, expenseController.create);
        router.put('/:id', auth, expenseController.update);
        router.delete('/:id', auth, expenseController.delete);
    }

    getRouter() {
        return router;
    }
}

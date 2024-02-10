import express from 'express';
import ExpenseCategoryController from '../controllers/expense-category-controller.js';

const router = express.Router();

export default class ExpenseCategoryRouter {
    constructor() {
        router.get('/', ExpenseCategoryController.getAll);
        router.get('/:id', ExpenseCategoryController.getById);
        router.post('/', ExpenseCategoryController.create);
        router.put('/:id', ExpenseCategoryController.update);
        router.delete('/:id', ExpenseCategoryController.delete);
    }

    getRouter() {
        return router;
    }

}
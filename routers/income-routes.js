import express from 'express';
import incomeController from '../controllers/income-controller.js';

const router = express.Router();

export default class IncomeRoutes {
  constructor() {
    router.get('/', incomeController.getAll);
    router.get('/:id', incomeController.getById);
    router.post('/', incomeController.create);
    router.put('/:id', incomeController.update);
    router.delete('/:id', incomeController.delete);
  }

  getRouter() {
    return router;
  }
}

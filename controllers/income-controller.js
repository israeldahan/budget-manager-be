import incomeService from '../services/income-service.js';  

class IncomeController {
    async getAll(req, res, next) {
        try {
        const { userId } = req;
        const incomes = await incomeService.getAll(userId);
        res.json(incomes);
        } catch (err) {
        next(err);
        }
    }
    
    async getById(req, res, next) {
        try {
        const { userId } = req;
        const { id } = req.params;
        const income = await incomeService.getById(userId, id);
        res.json(income);
        } catch (err) {
        next(err);
        }
    }
    
    async create(req, res, next) {
        try {
        const { userId } = req;
        const income = await incomeService.create(userId, req.body);
        res.status(201).json(income);
        } catch (err) {
        next(err);
        }
    }
    
    async update(req, res, next) {
        try {
        const { userId } = req;
        const { id } = req.params;
        const income = await incomeService.update(userId, id, req.body);
        res.json(income);
        } catch (err) {
        next(err);
        }
    }
    
    async delete(req, res, next) {
        try {
        const { userId } = req;
        const { id } = req.params;
        await incomeService.delete(userId, id);
        res.status(204).end();
        } catch (err) {
        next(err);
        }
    }
}

export default new IncomeController();
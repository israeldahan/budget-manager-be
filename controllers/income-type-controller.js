import e from 'express';
import incomeTypeService from '../services/income-type-service.js';

class IncomeTypeController {
    async getAll(req, res, next) {
        try {
            const incomeTypes = await incomeTypeService.getAll();
            res.json(incomeTypes);
        } catch (err) {
            next(err);
        }
    }

    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const incomeType = await incomeTypeService.getById(id);
            res.json(incomeType);
        } catch (err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            const incomeType = await incomeTypeService.create(req.body);
            res.status(201).json(incomeType);
        } catch (err) {
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const incomeType = await incomeTypeService.update(id, req.body);
            res.json(incomeType);
        } catch (err) {
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            await incomeTypeService.delete(id);
            res.status(204).end();
        } catch (err) {
            next(err);
        }
    }
}

export default new IncomeTypeController();
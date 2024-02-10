import expenseTypeService from '../services/expense-type-service.js';

export default class ExpenseTypeController {
    static async getAll(req, res) {
        try {
            const expenseTypes = await expenseTypeService.getAll();
            if (!expenseTypes) {
                return res.status(404).json({msg: "Expense types not found"});
            }
            return res.status(200).json(expenseTypes);
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }

    static async getById(req, res) {
        try {
            const expenseType = await expenseTypeService.getById(req.params.id);
            if (!expenseType) {
                return res.status(404).json({msg: "Expense type not found"});
            }
            res.status(200).json(expenseType);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async create(req, res) {
        try {
            const expenseType = await expenseTypeService.create(req.body);
            if (!expenseType) {
                return res.status(404).json({msg: "Expense type not found"});
            }
            res.status(200).json(expenseType);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async update(req, res) {
        try {
            const expenseType = await expenseTypeService.update(req.params.id, req.body);
            if (!expenseType) {
                return res.status(404).json({msg: "Expense type not found"});
            }
            res.status(200).json(expenseType);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async delete(req, res) {
        try {
            const expenseType = await expenseTypeService.deleteById(req.params.id);
            if (!expenseType) {
                return res.status(404).json({msg: "Expense type not found"});
            }
            res.status(200).json(expenseType);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }
}


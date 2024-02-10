import expenseService from '../services/expense-service.js';

export default class ExpenseController {
    static async getAll(req, res) {
        try {
            const expenses = await expenseService.getAll();
            if (!expenses) {
                return res.status(404).json({msg: "Expenses not found"});
            }
            return res.status(200).json(expenses);
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }

    static async getById(req, res) {
        try {
            const expense = await expenseService.getById(req.params.id);
            if (!expense) {
                return res.status(404).json({msg: "Expense not found"});
            }
            res.status(200).json(expense);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async create(req, res) {
        try {
            const expense = await expenseService.create(req.body);
            if (!expense) {
                return res.status(404).json({msg: "Expense not found"});
            }
            res.status(200).json(expense);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async update(req, res) {
        try {
            const expense = await expenseService.update(req.params.id, req.body);
            if (!expense) {
                return res.status(404).json({msg: "Expense not found"});
            }
            res.status(200).json(expense);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async delete(req, res) {
        try {
            const expense = await expenseService.deleteById(req.params.id);
            if (!expense) {
                return res.status(404).json({msg: "Expense not found"});
            }
            res.status(200).json(expense);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }
}


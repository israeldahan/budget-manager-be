import expenseCategoryService from '../services/expense-category-service.js';

export default class ExpenseCategoryController {
    static async getAll(req, res) {
        try {
            const expenseCategories = await expenseCategoryService.getAll();
            if (!expenseCategories) {
                return res.status(404).json({msg: "Expense categories not found"});
            }
            return res.status(200).json(expenseCategories);
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }

    static async getById(req, res) {
        try {
            const expenseCategory = await expenseCategoryService.getById(req.params.id);
            if (!expenseCategory) {
                return res.status(404).json({msg: "Expense category not found"});
            }
            res.status(200).json(expenseCategory);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async create(req, res) {
        try {
            const expenseCategory = await expenseCategoryService.create(req.body);
            if (!expenseCategory) {
                return res.status(404).json({msg: "Expense category not found"});
            }
            res.status(200).json(expenseCategory);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async update(req, res) {
        try {
            const expenseCategory = await expenseCategoryService.update(req.params.id, req.body);
            if (!expenseCategory) {
                return res.status(404).json({msg: "Expense category not found"});
            }
            res.status(200).json(expenseCategory);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async delete(req, res) {
        try {
            const expenseCategory = await expenseCategoryService.deleteById(req.params.id);
            if (!expenseCategory) {
                return res.status(404).json({msg: "Expense category not found"});
            }
            res.status(200).json(expenseCategory);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }
}
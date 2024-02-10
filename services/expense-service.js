import { Expense } from '../database/index.js';

export default class ExpenseService {
    static async getAll() {
        try {
            return await Expense.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            return await Expense.findByPk(id);
        } catch (error) {
            throw error;
        }
    }

    static async create(newExpense) {
        try {
            return await Expense.create(newExpense);
        } catch (error) {
            throw error;
        }
    }

    static async update(id, updateExpense) {
        try {
            const expenseToUpdate = await Expense.findByPk(id);
            if (expenseToUpdate) {
                await expenseToUpdate.update(updateExpense);
                return expenseToUpdate;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    static async deleteById(id) {
        try {
            const expenseToDelete = await Expense.findByPk(id);
            if (expenseToDelete) {
                await expenseToDelete.destroy();
                return expenseToDelete;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}
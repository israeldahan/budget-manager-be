import { ExpenseCategory } from '../database/index.js';

export default class ExpenseCategoryService {
    static async getAll() {
        try {
            return await ExpenseCategory.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            return await ExpenseCategory.findByPk(id);
        } catch (error) {
            throw error;
        }
    }

    static async create(newExpenseCategory) {
        try {
            return await ExpenseCategory.create(newExpenseCategory);
        } catch (error) {
            throw error;
        }
    }

    static async update(id, updateExpenseCategory) {
        try {
            const expenseCategoryToUpdate = await ExpenseCategory.findByPk(id);
            if (expenseCategoryToUpdate) {
                await expenseCategoryToUpdate.update(updateExpenseCategory);
                return expenseCategoryToUpdate;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    static async deleteById(id) {
        try {
            const expenseCategoryToDelete = await ExpenseCategory.findByPk(id);
            if (expenseCategoryToDelete) {
                await expenseCategoryToDelete.destroy();
                return expenseCategoryToDelete;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}
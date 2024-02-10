import { ExpenseType } from '../database/index.js';

class ExpenseTypeService {
    static async getAll() {
        try {
            return await ExpenseType.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            return await ExpenseType.findByPk(id);
        } catch (error) {
            throw error;
        }
    }

    static async create(newExpenseType) {
        try {
            return await ExpenseType.create(newExpenseType);
        } catch (error) {
            throw error;
        }
    }

    static async update(id, updateExpenseType) {
        try {
            const expenseTypeToUpdate = await ExpenseType.findByPk(id);
            if (expenseTypeToUpdate) {
                await expenseTypeToUpdate.update(updateExpenseType);
                return expenseTypeToUpdate;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }

    static async deleteById(id) {
        try {
            const expenseTypeToDelete = await ExpenseType.findByPk(id);
            if (expenseTypeToDelete) {
                await expenseTypeToDelete.destroy();
                return expenseTypeToDelete;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}


export default new ExpenseTypeService();
import { Income } from '../database/index.js';

class IncomeService {
    async getAll(userId) {
        const incomes = await Income.find({ userId });
        return incomes;
    }

    async getById(userId, id) {
        const income = await Income.findOne({ userId, _id: id });
        return income;
    }

    async create(userId, incomeData) {
        const income = new Income({ ...incomeData, userId });
        await income.save();
        return income;
    }

    async update(userId, id, incomeData) {
        const income = await Income.findOneAndUpdate(
            { userId, _id: id },
            incomeData,
            { new: true }
        );
        return income;
    }

    async delete(userId, id) {
        await Income.findOneAndDelete({ userId, _id: id });
    }
}

export default new IncomeService();
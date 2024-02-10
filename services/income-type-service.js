import { IncomeType } from '../database/index.js';

class IncomeTypeService {
    async getAll() {
        const incomeTypes = await IncomeType.find();
        return incomeTypes;
    }

    async getById(id) {
        const incomeType = await IncomeType.findById(id);
        return incomeType;
    }

    async create(incomeTypeData) {
        const incomeType = new IncomeType(incomeTypeData);
        await incomeType.save();
        return incomeType;
    }

    async update(id, incomeTypeData) {
        const incomeType = await IncomeType.findByIdAndUpdate(
            id,
            incomeTypeData,
            { new: true }
        );
        return incomeType;
    }

    async delete(id) {
        await IncomeType.findByIdAndDelete(id);
    }
}

export default new IncomeTypeService();
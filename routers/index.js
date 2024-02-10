import { Router } from "express";
const router = Router();

import UserRouter from "./user-routes.js";
import ExpenseRouter from "./expense-routes.js";
import ExpenseTypeRouter from "./expense-type-routes.js";
import ExpenseCategoryRouter from "./expense-category-routes.js";
import IncomeRoutes from "./income-routes.js";
import IncomeTypeRoutes from "./income-type-routes.js";


//routes
router.use("/users", new UserRouter().getRouter());
router.use("/expenses", new ExpenseRouter().getRouter());
router.use("/expenses-types", new ExpenseTypeRouter().getRouter());
router.use("/expenses-categories", new ExpenseCategoryRouter().getRouter());
router.use("/incomes", new IncomeRoutes().getRouter());
router.use("/incomes-types", new IncomeTypeRoutes().getRouter());


export default router;

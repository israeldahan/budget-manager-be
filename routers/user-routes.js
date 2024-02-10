import express from 'express';
import userController from '../controllers/user-controller.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

export default class UserRouter {
    constructor() {
        router.get('/', auth, userController.getAll);
        router.get('/:id', auth,  userController.getById);
        router.post('/', auth,  userController.create);
        router.put('/:id', auth,  userController.update);
        router.delete('/:id', auth, userController.delete);
        router.post('/login', userController.login);
        router.post('/register', userController.register);
        router.post('/me', auth, userController.me);
    }

    getRouter() {
        return router;
    }
}


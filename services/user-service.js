import { User } from "../database/index.js";

const getAll = async () => {
    try {
        const users = await User.findAll(); // SELECT * FROM users; 
        if (users.length > 0) {
            return users;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }        
}

const getById = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (user) {
            return user;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}

const create = async (newUser) => {
    try {
        const user = await User.create(newUser);
        if (user) {
            return user;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}

const update = async (id, userUpdated) => {
    try {
        const user = await getById(id);
        if (!user) {
            return null;
        }
        user.set(userUpdated);
        await user.save();
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteById = async (id) => {
    try {
        const user = await getById(id);

        if (!user) {
            return null;
        }
        await user.destroy();
        return user;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteAll = async () => {
    try {
        const user = await User.destroy({
            where: {},
            truncate: false
        });
        if (user) {
            return user;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }destroy
}

const login = async ({email, password}) => {
    try {
        const user = await User.findOne({
            where: {
                email,
                password
            }
        }); // SELECT * FROM users WHERE email = email AND password = password;
        if (user) {
            user.token = user.generateJWT();
            await user.save();    
            return user;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}

const register = async (newUser) => {
    try {
        const user = await User.create(newUser);
        if (user) {
            user.token = user.generateJWT();
            await user.save();
            return user;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}

const me = async (user) => {
    try {
        if (user) {
            return user;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}


export default {
    getAll,
    getById,
    create,
    update,
    deleteById,
    login,
    register,
    me
}
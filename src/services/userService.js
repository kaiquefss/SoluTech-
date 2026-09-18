import userRepository from "../repositories/userRepository.js";
import bcrypt from 'bcrypt'

const userService = {
    RetrieveUser: async() => {
        const resultado = await userRepository.select();
        return resultado
    },
    RetrieveUserId: async(userId) => {
         const resultado = await userRepository.selectId(userId);
        return resultado
    },
    RetrieveUserEmail: async(userId) => {
         const resultado = await userRepository.selectEmail(userId);
        return resultado
    },
    deleteUser: async(userId) => {
         const resultado = await userRepository.delete(userId);
        return resultado
    },
    createUser: async(user) => {
        console.log(user.role)
         const resultado = await userRepository.create(
            user.name,
            user.email,
            user.password,
            user.role
        );
        return resultado
    },
    updateUser: async(user) => {
         const resultado = await userRepository.update(
            user.name,
            user.email,
            user.password,
            user.id
        );
        return resultado
    },
    hashedPassword: async (password) => {
        const hashedPassword = await bcrypt.hash(password, 10)
        return hashedPassword
    }
};

export default userService;
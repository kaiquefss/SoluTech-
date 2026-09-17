import userRepository from "../repositories/userRepository.js";
import bcrypt from 'bcrypt'

const userService = {
    recuperarUsuario: async() => {
        const resultado = await userRepository.selecionar();
        return resultado
    },
    recuperarUsuarioPorId: async(userId) => {
         const resultado = await userRepository.selecionarPorId(userId);
        return resultado
    },
    recuperarUsuarioPorEmail: async(userId) => {
         const resultado = await userRepository.selecionarPorEmail(userId);
        return resultado
    },
    deletarUsuario: async(userId) => {
         const resultado = await userRepository.delete(userId);
        return resultado
    },
    criarUsuario: async(user) => {
         const resultado = await userRepository.criar(
            user.name,
            user.email,
            user.password,
            user.role
        );
        return resultado
    },
    atualizarUsuario: async(user) => {
         const resultado = await userRepository.atualizar(
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
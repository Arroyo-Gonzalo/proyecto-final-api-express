import { generateToken } from "../data/tokentest.js";

const fakeUser = {
  id: "123",
  email: "test@gmail.com",
  password: "123456",
};

export const loginService = async (email, password) => {
  // validación simple de campos
  if (!email || !password) {
    const err = new Error("email y password son obligatorios");
    err.statusCode = 400;
    throw err;
  }

  // “autenticación” fake para el TP
  if (email !== fakeUser.email || password !== fakeUser.password) {
    const err = new Error("Credenciales inválidas");
    err.statusCode = 401;
    throw err;
  }

  const user = { id: fakeUser.id, email: fakeUser.email };
  const token = generateToken(user);

  return { token };
};

import jwt from "jsonwebtoken";
import "dotenv/config";

const secret_key = process.env.JWT_SECRET_KEY || "clave-fallback";

export const generateToken = (userData) => {
  const user = { id: userData.id, email: userData.email };
  const options = { expiresIn: "1h" };
  return jwt.sign(user, secret_key, options);
};

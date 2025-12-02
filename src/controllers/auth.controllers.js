import { loginService } from "../services/auth.services.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await loginService(email, password);
    return res.json({ token: result.token });
  } catch (error) {
    if (error.statusCode === 400) {
      return res.status(400).json({ message: error.message });
    }
    if (error.statusCode === 401) {
      return res.status(401).json({ message: error.message });
    }
    // fallback por las dudas
    return res.status(500).json({ message: "Error interno" });
  }
};

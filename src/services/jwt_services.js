import jwt from "jsonwebtoken";

export const generateToken = (user) =>
  jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );

export const verifyToken = (token) =>
  jwt.verify(token, process.env.JWT_SECRET_KEY);
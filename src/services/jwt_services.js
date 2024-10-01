import jwt from "jsonwebtoken";

const generateToken = (user) =>
  jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );

  const verifyToken = token => jwt.verify(token, process.env.JWT_SECRET_KEY)

export default {
    generateToken,
    verifyToken
}

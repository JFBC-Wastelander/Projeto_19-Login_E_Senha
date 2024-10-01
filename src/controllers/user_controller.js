import jwt_service from "../services/jwt_services.js";
import User from "../models/user_model.js"

const login = async (req, res) => {
  try {
    let { email, senha } = req.body;
    let user = await User.findOne({
      email,
    });

    if (user && user.isValidPassword(password)) {
      let token = jwt_service.generateToken(user);
      res.json({
        token,
      });
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const signup = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.create({ email, password });

    let token = jwt_service.generateToken(user);
    res.status(201).json({
      token,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

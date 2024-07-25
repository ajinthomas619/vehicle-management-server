import { User } from "../models/userModel.js";
import { hashPassword, comaprePassword,createAccessToken } from "../utils/utils.js";

export const createUser = async (req, res) => {
  try {
    const { username, fullname, email, password, phone } = req.body;

    const userExists = await User.findOne({ email: email });
    console.log("user ecxists",userExists)
    if (userExists) {
      return res
        .status(400)
        .json({ status: false, message: "User already exists" });
    }
    const hashedPass = await hashPassword(password);

    const user = await User.create({
      username: username,
      password: hashedPass,
      fullname: fullname,
      email: email,
      phone: phone,
    });
    if (user) {
  createAccessToken(user._id,process.env.JWT_SECRET)
      return res
        .status(200)
        .json({
          status: true,
          message: "User created successfully",
          data: user,
        });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "User not created" });
    }
  } catch (error) {
    console.log("error in creating user", error);
    return res
      .status(500)
      .json({ status: false, message: "internal server error" });
  }
};
export const findUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.find({ email: email });
    if (user) {
      const isMatch = await comaprePassword(password, user.password);
      if (isMatch) {
        createAccessToken(user._id,process.env.JWT_SECRET)
        return res
          .status(200)
          .json({
            status: true,
            message: "User found successfully",
            data: user,
          });
      } else {
        return res
          .status(400)
          .json({ status: false, message: "invalid credentials" });
      }
    }
  } catch (error) {
    console.log("error in finding user", error);
    return res
      .status(500)
      .json({ status: false, message: "internal server error" });
  }
};



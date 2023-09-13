import User from "../models/UserSchema.js";
import Doctor from "../models/DocSchema.js";
import { Jwt } from "jsonwebtoken";
// import bcrypt from "bcryps.js";

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;
  try {
    const user = null;
    if (role === "patient") {
      user = User.findOne({ email });
    } else if (role === "doctor") {
      user = User.findOne({ email });
    }

    // if a user is exist
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
  } catch (err) {}
};
export const login = async (req, res) => {
  try {
  } catch (error) {}
};

import { Request, Response } from "express";
import { User } from "@models/User";
import * as userRepository from "@repositories/UserRepository";

export const create = async (req: Request, res: Response) => {
  const { login, name, age, password } = req.body;

  const user = new User(login, password, name, age);

  await userRepository.create(user);

  return res.json({ message: "User created." });
};

export const getAll = async (req: Request, res: Response) => {
  const users = await userRepository.getAll();

  return res.json(users);
};

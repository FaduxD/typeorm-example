import * as UserController from "@controllers/UserController";
import express from "express";

module.exports = (app: ReturnType<typeof express>) => {
  app.post("/user/", UserController.create);
  app.get("/users/", UserController.getAll);
};

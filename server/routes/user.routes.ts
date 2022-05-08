import { Request, Response } from "express";
import { UserController } from "server/controllers/user.controllers";

const app = require('express')
const UserRouter = app.Router();

UserRouter.get('/', UserController.show)

export {UserRouter};
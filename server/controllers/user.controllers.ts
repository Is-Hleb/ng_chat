import { Request, Response } from "express";

const UserController = {
    show: (req : Request, res : Response) => {
        res.send("Action")
    },
};

export {UserController};
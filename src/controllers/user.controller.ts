import { Request, Response } from 'express';

class UserController {

    public index (req: Request, res: Response): Response {
        return res.status(200).send({ message: "Essa é a rota UserController.index"})
    }
}

export default new UserController()
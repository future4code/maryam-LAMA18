import { Request, Response } from "express";
import { UserBuisiness } from "../buisiness/userBuisiness";

export class UserController {

    signup = async (
        req: Request,
        res: Response
    ) => {
        try {

            const { name, email, password, role } = req.body

            const result = await new UserBuisiness().signup(name, email, password, role)

            res.status(200).send(result)
        } catch (error: any) {
            res.status(500).send("Falha interna")
        }
    }

    login = async (
        req: Request,
        res: Response
    ) => {
        try {

            const { email, password } = req.body

            const result = await new UserBuisiness().login(email, password)

            res.status(200).send({ result })
        } catch (error: any) {
            res.status(500).send({error: error.message})
        }
    }
}
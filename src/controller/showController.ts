import { Response, Request } from "express";
import { ShowBuisiness } from "../buisiness/showBuisiness";
import { Show } from "../model/show";

export class ShowController {

    createShow = async (
        req: Request,
        res: Response
    ) => {

        try {

            const { weekDay, bandId, startTime, endTime } = req.body

            const token = req.headers.authorization as string

            await new ShowBuisiness().createShow(weekDay, startTime, endTime, bandId, token)

            res.status(200).send("Show agendado")
        } catch (error: any) {
            res.status(error.customErrorCode || 400).send({ message: error.message })
        }
    }
}
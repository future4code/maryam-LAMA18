import { Response, Request } from "express";
import { BandBuisiness } from "../buisiness/bandBuisiness";

export class BandController {

    createBand = async (
        req: Request,
        res: Response
    ) => {
        try {

            const { name, mainGenre, responsible } = req.body

            const token = req.headers.authorization as string

            await new BandBuisiness().createBand(name, mainGenre, responsible, token)

            res.status(200).send("Banda registrada")
        } catch (error: any) {
            res.status(500)
                .send({ error: error.message })
        }
    }

    getBandDetail = async (
        req: Request,
        res: Response
    ) => {
        try {
            const input = (req.query.id ?? req.query.name) as string

            const band = await new BandBuisiness().getBandDetail(input)

            res.status(200).send(band)
        } catch (error: any) {
            res.status(error.customErrorCode || 400)
                .send({ message: error.message })
        }
    }
}
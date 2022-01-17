import { BandDatabase } from "../data/bandDatabase"
import { ShowDatabase } from "../data/showDatabase"
import { Show } from "../model/show"
import { IdGenerator } from "../services/idGenerator"
import { Authenticator } from "../services/tokenGenerator"

export class ShowBuisiness {

    createShow = async (weekDay: string, startTime: number, endTime: number, bandId: string, token: string) => {

        const tokenData = new Authenticator().getTokenData(token)

        if (tokenData.role !== "ADMIN") {
            throw new Error("Função disponível apenas para administradores")
        }

        if (!weekDay || !startTime || !endTime || !bandId) {
            throw new Error("Preencha todos os campos")
        }

        if (startTime < 8 || endTime > 23 || startTime >= endTime) {
            throw new Error("Confira os horários")
        }

        if (!Number.isInteger(startTime) || !Number.isInteger(endTime)) {
            throw new Error("Shows apenas em horas inteiras")
        }

        const bandFromDB = await new BandDatabase().getBandDetail(bandId)

        if (!bandFromDB) {
            throw new Error("Banda não encontrada")
        }

        const id = new IdGenerator().generate()

        const show = new Show(id, weekDay, bandId, startTime, endTime)

        await new ShowDatabase().createShow(show)
    }
}
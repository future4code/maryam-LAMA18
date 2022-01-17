import { response } from "express";
import { Band } from "../model/band";
import { BaseDatabase } from "./baseDatabase";

export class BandDatabase extends BaseDatabase {

    createBand = async (band: Band): Promise<void> => {
        try {

            await this.connection("bands")
                .insert({
                    id: band.getId(),
                    name: band.getName(),
                    music_genre: band.getMainGenre(),
                    responsible: band.getResponsible()
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getBandDetail = async (idOrName: string) => {
        try {

            const result = await this.connection("bands")
                .select("*")
                .where({ id: idOrName })
                .orWhere({ name: idOrName })

            if (!result[0]) {
                throw new Error("Não encontramos esta banda nos registros")
            }

            const band = new Band(result[0].id, result[0].name, result[0].music_genre, result[0].responsible)

            return band
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
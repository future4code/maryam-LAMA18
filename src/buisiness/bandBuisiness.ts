import { BandDatabase } from "../data/bandDatabase"
import { Authenticator } from "../services/tokenGenerator"
import { Band } from "../model/band";
import { IdGenerator } from "../services/idGenerator";
import { authenticationData } from "../services/tokenGenerator";

export class BandBuisiness {

    createBand = async (
        name: string,
        mainGenre: string,
        responsible: string,
        token: string
    ) => {
        
        const tokenData = new Authenticator().getTokenData(token)

        if (tokenData?.role !== "ADMIN") {
            throw new Error("Funçao disponível apenas para administradores")
        }

        if (!name || !mainGenre || !responsible) {
            throw new Error("Preencha todos os campos de registro")
        }

        const id = new IdGenerator().generate()
        const band = new Band(id, name, mainGenre, responsible)
        await new BandDatabase().createBand(band)
    }

    getBandDetail = async (idOrName: string): Promise<Band> => {

        if(!idOrName) {
            throw new Error("Preencha o campo de pesquisa")
        }

        const band = await new BandDatabase().getBandDetail(idOrName)
        
        return band 
    }
}
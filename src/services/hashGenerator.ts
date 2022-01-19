import { compareSync, genSaltSync, hashSync } from "bcryptjs"

export class HashManager {
    createHash = async (plainText: string): Promise<string> => {
        const salt = genSaltSync(12)

        const cypherText = hashSync(plainText, salt)

        return cypherText
    }

    compareHash = async (
        plainText: string,
        cypherText: string
    ): Promise<boolean> => {
        return compareSync(plainText, cypherText)
    }
}
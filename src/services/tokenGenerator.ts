import { config } from "dotenv";
import { JwtPayload, sign, verify } from "jsonwebtoken";

config()

export interface authenticationData {
    id: string
    role: string
}

export class Authenticator {
    generateToken = (
        payload: authenticationData
    ) => {
        return sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: "12"
            }
        )
    }

    getTokenData = (token: string): authenticationData | null => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY!
            ) as JwtPayload

            return {
                id: tokenData.id,
                role: tokenData.role
            }
        } catch (error) {
            return null
        }
    }
}
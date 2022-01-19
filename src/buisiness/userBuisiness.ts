import { UserDatabase } from "../data/userDatabase"
import { User } from "../model/user"
import { HashManager } from "../services/hashGenerator"
import { IdGenerator } from "../services/idGenerator"
import { Authenticator } from "../services/tokenGenerator"

export class UserBuisiness {

    signup = async (
        name: string,
        email: string,
        password: string,
        role: string
    ): Promise<string> => {

        const id = new IdGenerator().generate()

        const hashPassword = await new HashManager().createHash(password)

        const newUser = new User(id, name, email, hashPassword, role)

        await new UserDatabase().signup(newUser)

        const token = new Authenticator().generateToken({ id, role })

        return token
    }

    login = async (
        email: string,
        password: string
    ): Promise<string | undefined> => {

        const checkedUserEmail = await new UserDatabase().login(email)

        const checkedPassword = await new HashManager().compareHash(password, checkedUserEmail.getPassword())

        if (!checkedPassword) {
            throw new Error("Senha incorreta")
        }

        const token = new Authenticator().generateToken({ id: checkedUserEmail.getId(), role: checkedUserEmail.getRole() })
        
        return token
    }
}
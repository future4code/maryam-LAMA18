import { User } from "../model/user";
import { BaseDatabase } from "./baseDatabase";

export class UserDatabase extends BaseDatabase {

    signup = async (user: User): Promise<void> => {
        try {
            await this.connection("users").insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    login = async (email: string) => {

        const result = await this.connection("users")
            .select("*").where({ email })

        return new User(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role)
    }
}
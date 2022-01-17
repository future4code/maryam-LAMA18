import app from "./controller/app";
import { BandController } from "./controller/bandController";
import { UserController } from "./controller/userController";

const userController = new UserController()
const bandController = new BandController()
app.post("/signup", userController.signup)
app.post("/login", userController.login)
// SENHAS: teste
app.put("/bandRegister", bandController.createBand)
app.get("/detail", bandController.getBandDetail)
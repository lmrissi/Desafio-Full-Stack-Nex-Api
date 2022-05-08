import { injectable } from "tsyringe";
import { PasswordUtils } from "../../../utils/PasswordUtils";
import { AuthenticationResquestDto, AuthenticationResponseDto } from "../dto/AuthenticationDto";
import { User } from "../../users/entities/User";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../errors/AppError";
require('dotenv').config()

@injectable()
class AuthenticationUseCase {
    private secretKey: any = process.env.JWT_SECRET_KEY;

    async execute({ name, password }: AuthenticationResquestDto): Promise<AuthenticationResponseDto | AppError> {

        return await User.findOne(
            {
                raw: true,
                where: { name: name}
            })
            .then((user: any) => {
                const userInfo = {
                    userId: user.id,
                    userName: user.name,
                    userPassword: user.password
                }

                const { userId, userName, userPassword } = userInfo

                return new PasswordUtils().isValid(password, userPassword)
                    .then((isValid) => {
                        if (isValid) {
                            const token = sign({}, this.secretKey, { subject: String(userId), expiresIn: "1d", });

                            const result: AuthenticationResponseDto = {
                                token,
                                user: {
                                    id: userId, 
                                    name: userName,
                                }
                            }
                    
                            return result
                        }
                        return new AppError("A senha está errada", 400);         
                    })
                    .catch(() => new AppError("Senha inválida", 400))
            })
            .catch(() => new AppError("Este usuário não existe"))
    }
}

export { AuthenticationUseCase }
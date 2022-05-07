import { injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { PasswordUtils } from '../../../../utils/PasswordUtils';
import { CreateUserDto } from '../../dto/CreateUserDto';
import { User } from '../../entities/User';

@injectable()
class CreateUserUseCase {
    async execute({ name, email, password}: CreateUserDto) {
        return await new PasswordUtils().encrypt(password)
            .then((passwordHash) => {
                return User.create({
                    name: name,
                    email: email,
                    password: passwordHash
                })
            })
            .catch(() => new AppError("Password must be a string"))
    }
}

export { CreateUserUseCase }

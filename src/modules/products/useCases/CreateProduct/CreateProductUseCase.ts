import { verify } from 'jsonwebtoken';
import { injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { CreateProductDto } from '../../dto/CreateProductDto';
import { Product } from '../../entities/Product';

@injectable()
class CreateProductUseCase {
    async execute({ name, description, price, authenticationHeader}: CreateProductDto) {
        const secretKey: any = process.env.JWT_SECRET_KEY
            
        const { sub: user_id } = verify(authenticationHeader, secretKey)
        
        return await Product.create({
            name: name,
            description: description,
            price: price,
            userId: user_id
        }).then((product) => product)
        .catch((err) => {
            return err
        })
    }
}

export { CreateProductUseCase }